const yup = require('yup')
const phoneRegExp = /^09\d{8}$/

const Validationaaa = yup.object().shape({
  name: yup.string().required('名稱不可為空'),
  username: yup.string().required('帳號不可為空'),
  password: yup
    .string()
    .min(6, '請輸入6-12個字')
    .max(12, '請輸入6-12個字')
    .required('密碼不可為空'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], '請輸入正確的確認密碼')
    .required('確認密碼不可為空'),
  email: yup.string().email('請輸入正確的信箱地址').required('信箱不可為空'),
  birthDate: yup.date().required('生日不可為空'),
})

// contactname: yup.string().required('聯絡人名稱不可為空'),
// phone: yup
//   .string()
//   .matches(phoneRegExp, '無效的電話號碼')
//   .required('電話號碼不可為空'),

// const Validationaaa = yup.object().shape({
//   firstName: yup.string().required('Required'),
//   lastName: yup.string().required('Required'),
//   email: yup.string().email('Invalid email').required('Required'),
//   password: yup
//     .string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   birthDate: yup.date().required('Required'),
//   age: yup.number().required('Required'),
// })

export default Validationaaa
