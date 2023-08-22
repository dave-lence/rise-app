import { View, Text } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import InputErrorText from "./InputErrorText";
import { useFormikContext } from "formik";

const AppFormFields = ({ icon, name, showPass, style, secureTextEntry, iconName,...otherProps }) => {

    const {handleChange, setFieldTouched, touched, errors} = useFormikContext();

  return (
    <View>
      <AppTextInput
        {...otherProps}
        icon={icon}
        showPass={showPass}
        iconName={iconName}
        style={style}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        secureTextEntry={secureTextEntry}
      />

      <InputErrorText 
        error={errors[name]}
        visible={touched[name]}
      />
    </View>
  );
};

export default AppFormFields;
