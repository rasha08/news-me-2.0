import TextInput from '../../../form-elements/text-input/text-input';
import Checkbox from '../../../form-elements/checkbox/checkbox';
import ModalErrorData from '../modal-error-data/modal-error-data';

import { isEmailValid, isStringAplhaNumeric, isUserBirthYearValid } from '../../../../services/validation.service';
import { updateLoginObject } from '../../../../services/login.service';

const LoginModal = props => {
  const { modalData } = props ? props : {};

  return (
    <form>
      <ModalErrorData modalData={modalData} />

      <TextInput
        name={'email'}
        label={'Email address'}
        type={'email'}
        describedby={'We\'ll never share your email with anyone else.'}
        placeholder={'Enter email'}
        callback={(val, name) => updateLoginObject(val, name)}
        validator={isEmailValid}
        errorMessage={'Please enter valid email address'}
      />

      <TextInput
        name={'password'}
        label={'Password'}
        type={'password'}
        placeholder={'Enter password'}
        callback={(val, name) => updateLoginObject(val, name)}
        validator={isStringAplhaNumeric}
        errorMessage={'Password must be aplphanumeric with length between 3 and 30 characters'}
      />

      <Checkbox
        name={'rememberMe'}
        label={'Remember Me'}
        callback={(val, name) => updateLoginObject(val, name)}
      />
    </form>
  );
}

export default LoginModal;