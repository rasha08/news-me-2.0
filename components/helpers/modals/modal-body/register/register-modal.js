import TextInput from '../../../form-elements/text-input/text-input';
import Select from '../../../form-elements/select/select';
import ModalErrorData from '../modal-error-data/modal-error-data';

import { isEmailValid, isStringAplhaNumeric, isUserBirthYearValid } from '../../../../services/validation.service';
import { updateRegistrationObject, getValidBirthYears } from '../../../../services/registration.service';

const RegisterModal = props => {
  const { modalData } = props ? props : {};

  return (
    <form>
      <ModalErrorData modalData={modalData} />

      <TextInput
        name={'username'}
        label={'User Name'}
        type={'text'}
        placeholder={'Enter username'}
        callback={(val, name) => updateRegistrationObject(val, name)}
        validator={isStringAplhaNumeric}
        errorMessage={'Username must be aplphanumeric with length between 3 and 30 characters'}
      />
      <TextInput
        name={'email'}
        label={'Email address'}
        type={'email'}
        describedby={'We\'ll never share your email with anyone else.'}
        placeholder={'Enter email'}
        callback={(val, name) => updateRegistrationObject(val, name)}
        validator={isEmailValid}
        errorMessage={'Please enter valid email address'}
      />
      <TextInput
        name={'password'}
        label={'Password'}
        type={'password'}
        placeholder={'Enter password'}
        callback={(val, name) => updateRegistrationObject(val, name)}
        validator={isStringAplhaNumeric}
        errorMessage={'Password must be aplphanumeric with length between 3 and 30 characters'}
      />
      <Select
        name={'birthyear'}
        label={'Select Your Age'}
        callback={(val, name) => updateRegistrationObject(val, name)}
        validator={isUserBirthYearValid}
        errorMessage={'Please select valid birthyear'}
        options={getValidBirthYears()}
      />
    </form>
  );
}

export default RegisterModal;