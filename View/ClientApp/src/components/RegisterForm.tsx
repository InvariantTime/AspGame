import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Button, Input } from "reactstrap";

export const RegisterForm = () => {

    const OnSubmit = () => {
        
    }

    return (
        <form className="max-w-sm w-full bg-white p-8 rounded shadow-lg">

            <Heading className="text-center">Регистрация</Heading>

            <div className="mb-4">
                <Text>Имя</Text>
                <Input required type="text"/>
            </div>
            
            <div className="mb-4">
                <Text>Пароль</Text>
                <Input required type="password"/>
            </div>

            <div className="mb-4">
                <Text>Подтверждение пароля</Text>
                <Input required type="password"/>
            </div>

            <Input type="submit" className="bg-green-400 hover:bg-green-600">Send</Input>
        </form>
    );
}