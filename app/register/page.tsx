'use client'

import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import Heading from "@/components/ui/Heading";
import { useActions } from "@/hook/useActions";
import { UseAuth } from "@/hook/useAuth";
import { useAuthRedirect } from "@/hook/useAuthRedirect";
import { IEmailPassword, IRegister } from "@/types/user.types";
import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hook/useTypedSelector";

const Register : NextPage = () => {

    useAuthRedirect()

    const {push} = useRouter()

    const {message} = useAppSelector(state => state.user)

    const {isLoading} = UseAuth()

    const {register, login} = useActions()

    const { register : formregister, handleSubmit, formState: {errors}, reset } = useForm<IRegister>({
        mode: 'onChange'
    })

    const onSubmit : SubmitHandler<IRegister> = (data) => {
        register(data)
        reset()
    }

    return (
        <section className="flex h-screen mt-5" >
            <form onSubmit={handleSubmit(onSubmit)} className=" m-auto" >
                <Heading className="text-center mb-4" >
                    Регистрация
                </Heading>

                <Field {...formregister('email', {
                    required: 'Почта обязательная',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Только корректная почта'
                    }
                })} placeholder="Почта" error={errors?.email?.message} className="mb-3 px-3 border-gray" />
                
                <Field {...formregister('name', {
                    required: 'Имя обязательно',
                    minLength: {
                        value: 2,
                        message: 'Не менее 2-х символов'
                    }
                })} placeholder="Имя" error={errors?.name?.message} className="mb-3 px-3 border-gray" />

                <Field {...formregister('phone', {
                    required: 'Телефон обязательно',
                    minLength: {
                        value: 5,
                        message: 'Не менее 5 символов'
                    }
                })} placeholder="Телефон" error={errors?.phone?.message} className="mb-3 px-3 border-gray" />
                
                <Field {...formregister('password', {
                    required: 'Пароль обязательный',
                    minLength: {
                        value: 6,
                        message: 'Не менее 6 символов'
                    }
                })} placeholder="Пароль" error={errors?.password?.message} className="mb-3 px-3 border-gray" />
                <Button className="m-auto" variant='dark' type='submit'>Регистрация</Button>
                <div className="mt-3 text-center" >
                    <span>Уже зарегестрированы?</span>
                    <button 
                        type='button'
                        className="text-blue text-sm mt-3 font-semibold ml-2"
                        onClick={() => push('/login')}
                    >Войти</button>
                </div>
                <div className="text-center" >
                    <button 
                        type="button"
                        className="text-blue text-sm mt-3 font-semibold"
                        onClick={() => push('/')} >
                        На главную
                    </button>
                </div>
                <div className="mt-3 text-center" >
                    {message && <span className="text-red-600 text-sm font-semibold text-center" >{message}</span>}
                </div>
            </form>
        </section>
    )
}

export default Register;