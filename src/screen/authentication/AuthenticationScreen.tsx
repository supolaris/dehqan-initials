import React, {useState} from 'react';
import Authentication from '../../component/authentication/Authentication';

const AuthenticationScreen = () => {
  const [inputNumVal, setInputNumVal] = useState<string>('');

  const onChangeNumVal = (val: string) => {
    setInputNumVal(val);
  };

  const onPolicyPressed = () => {};
  const onGetOtpPressed = () => {};
  const guestLoginPressed = () => {};
  const onTermsConditionPressed = () => {};

  return (
    <Authentication
      inputNumVal={inputNumVal}
      onPolicyPressed={onPolicyPressed}
      onGetOtpPressed={onGetOtpPressed}
      guestLoginPressed={guestLoginPressed}
      onChangeNumVal={onChangeNumVal}
      onTermsConditionPressed={onTermsConditionPressed}
    />
  );
};

export default AuthenticationScreen;
