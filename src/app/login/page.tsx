import { Metadata } from 'next'
import LoginForm from '../components/LoginForm'
import AntLogin from '../components/AntLogin'
 
export const metadata: Metadata = {
  title: 'Greekosystem Login',
}
 
export default function Page() {
  return <LoginForm></LoginForm>
}