import React, { useRef } from "react";
import { TextInput, Text } from "react-native-paper";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native";

const Textfield = ({
  id,
  label,
  value,
  keyboardType,
  disabled,
  mode,
  onChangeText,
  error = "",
  style,
  inputViewStyle,
  maxLength,
  left,
  numberOfLines,
  multiline,
  paddingFlag = false,
  right,
  ref,
  onFocus,
  secureTextEntry,
}) => {
  const textInputRef = useRef(null);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={inputViewStyle}>
          <ScrollView keyboardShouldPersistTaps="always">
            <TextInput
              id={id}
              {...(keyboardType === "numeric" && {
                contentStyle: { paddingTop: 0, paddingBottom: 0 },
              })}
              style={{
                ...style,
                textAlignVertical: "center",
              }}
              // defaultValue={defaultValue}
              value={value}
              // defaultValue={value}
              onChangeText={onChangeText}
              disabled={disabled}
              blurOnSubmit={false}
              label={label}
              mode={mode}
              selectionColor="#A3A3A3"
              activeOutlineColor={error != "" ? "#FC0202" : "#00669B"}
              dense
              {...(paddingFlag
                ? {
                    contentStyle: {
                      color: "#00669B",
                      fontSize: 18,
                      margin: 0,
                      paddingTop: 0,
                      alignItems: "flex-end",
                      // paddingBottom: -5,
                      paddingTop: 10,
                    },
                  }
                : {
                    contentStyle: {
                      color: "#00669B",
                      fontSize: 18,
                      margin: 0,
                      paddingTop: 0,
                      alignItems: "flex-end",
                      paddingBottom: -10,
                    },
                  })}
              // contentStyle={{
              //   color: "#00669B",
              //   fontSize: 18,
              //   margin: 0,
              //   paddingTop: 0,
              //   alignItems: "flex-end",
              //   paddingBottom: -10,
              // }}
              // outlineColor="#FC0202"
              outlineColor={error ? "#FC0202" : "#A3A3A3"}
              textColor="#A3A3A3"
              maxLength={maxLength}
              keyboardType={keyboardType}
              left={left}
              placeholderTextColor="#ff0000"
              multiline={multiline}
              numberOfLines={numberOfLines}
              right={right}
              secureTextEntry={secureTextEntry}
              returnKeyType="done"
              onEndEditing={() => {
                Keyboard.dismiss;
            
              }}
              onKeyPress={() => {
                textInputRef.current?.isFocused();
              }}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              ref={ref}
              onFocus={onFocus}
            />
              <Text
            style={{
              alignSelf: "flex-start",
              color: "#FC0202",
              fontSize: 12,
              // margin:0,
              // marginLeft: 5,
            }}
          >
            {error != "" && error}
          </Text>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      {/* {error != "" && ( */}
        {/* <View style={inputViewStyle}>
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#FC0202",
              fontSize: 12,
              // margin:0,
              // marginLeft: 5,
            }}
          >
            {error != "" && error}
          </Text>
        </View> */}
      {/* )} */}
      {/* // <TextInput
    //   label={label}
    //   value={value}
    //   mode={mode}
    //   secureTextEntry={secureTextEntry}
    //   outlineColor={outlineColor}
    //   activeOutlineColor={activeOutlineColor}
    
    //   disabled={disabled}
    //   selectionColor={selectionColor}
    //   style={{
    //     backgroundColor: "#e7e7e7",
    //     fontSize: 13,
    //     height: 39,
    //   }}
    //   placeholder={placeholder}
    //   keyboardType={keyboardType}
    //   multiline={multiline}
    //   right={right}
    //   left={left}
    //   maxLength={maxLength}
    //   dense={dense}
    //   {...(keyboardType === "numeric" && {
    //     contentStyle: { paddingTop: 0, paddingBottom: 0 },
    //   })}
    // /> */}
    </>
  );
};

Textfield.defaultProps = {
  mode: "outlined",
  style: {
    backgroundColor: "#e7e7e7",
    fontSize: 16,
    height: 39,
  },
  selectionColor: "black",
  activeOutlineColor: "black",
  outlineColor: "black",
  placeholder: "",
  disabled: false,
  keyboardType: "text",
  multiline: false,
  dense: true,
};
export default Textfield;
