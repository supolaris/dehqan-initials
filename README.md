## Custom Components usage

```bash
 <CustomText
            preset="medium"
            text="helloWorld"
            color={AppColors.black}
            fontSize={normalizeFont(12)}
            style={{
              marginTop: normalizeHeight(10),
            }}
          />
```

```bash
<CustomTouchableOpacity
            text="Save"
            preset="medium"
            textColor={AppColors.black}
            fontSize={normalizeFont(12)}
            onPress={() => {}}
            style={{}}
          />
```

```bash
<CustomTextInput
              inputValue={props.inputNumVal}
              onChangeText={props.onChangeNumVal}
              placeholder="+92 3XX-XXXXXXX"
              placeholderTextColor={'rgba(73, 73, 73, 0.52)'}
              style={{
                borderWidth: 1,
                borderColor: borderColor,
              }}
            />
```

## To be solved

```bash
different text (primary) colors ==> shop card tile => and bottom tabs title
```

```bash
profile screen flow ==> view profile screen is not available
```

```bash
exit app and delete account popup not included
```
