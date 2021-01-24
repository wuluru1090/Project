const yup = require('yup')

const Validationaaa = yup.object().shape({
  nowpass: yup.string().required('你的密碼不是空的'),
  password: yup
    .string()
    .min(6, '請輸入6-12個字')
    .max(12, '請輸入6-12個字')
    .required('密碼不可為空'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], '密碼不一致')
    .required('確認密碼不可為空'),
})

export default Validationaaa
