import { useRouter } from "next/navigation"

const AuthPad = () => {

    const {push} = useRouter()

    return <div className="text-blue mt-2" >
        <button type="button" onClick={() => push('/login')} >Авторизоваться</button>
    </div>

}

export default AuthPad