import { Component } from 'react';
import BaseLayout from '../../components/base-layout-components/base-layout/base-layout';
import { get } from 'lodash';
import { closeModal, submitModal } from '../../components/services/modal-helper.service';
import { logout, checkIfUserLoggedIn } from '../../components/services/login.service';

export default class MyComponent extends Component {
  static getInitialProps(serverData) {
    return {
      websiteConfiguration: serverData.query.websiteConfiguration,
      newsCategory: serverData.query.newsCategory,
      navigation: serverData.query.navigation,
      sources: serverData.query.sources,
      currentNews: serverData.query.currentNews,
      originalUrl: serverData.req.originalUrl
    };
  }

  componentDidMount() {
    this.checkIfUserLoggedIn();
  }

  constructor() {
    super();
    this.bindMethods();
  }


  bindMethods() {
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.submitModal = this.submitModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  getMethods() {
    return  {
      closeModal: this.closeModal,
      openModal: this.openModal,
      submitModal: this.submitModal,
      logout: this.logout
    }
  }

  closeModal() {
    this.setState({
      modalTypeOpen: '',
      modalData:''
    });

    closeModal(this.state.modalTypeOpen)
  }

  submitModal(type) {
    submitModal(type).then(res => {
      this.setState({
        user: get(res, 'data'),
        modalData:''
      });
      this.closeModal(type);
    }).catch(err => {
      this.setState({
        modalData: get(err, 'response.data.message')
      });
    });
  }

  openModal(modalTypeOpen) {
    this.setState({
      modalTypeOpen
    });
  }

  logout() {
    this.setState({user: null});
    logout();
  }

  checkIfUserLoggedIn() {
    checkIfUserLoggedIn()
      .then(res => this.setState({user: get(res, 'data')}))
      .catch(err => {})
  }

  render() {
    const { websiteConfiguration, newsCategory, navigation, sources, currentNews, originalUrl } = this.props;
    const { modalTypeOpen, user, modalData } = this.state ? this.state : {};

    return (
      <div>
        <div>
          <BaseLayout
            data={{
              websiteConfiguration,
              newsCategory,
              navigation,
              sources,
              currentNews,
              originalUrl,
              modalTypeOpen,
              modalData,
              user,
              methods: this.getMethods()
            }}
          />
        </div>
       <script src="/static/js/custom.js"></script>
      </div>
    );
  }
}
