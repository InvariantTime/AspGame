import { Code, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {

}

export const RoomPresenter = () => {
    const [players, setPlayers] = useState<Player[]>([
    ]);

    return (
        <div className="max-w-sm w-full p-8 flex flex-row">
            <div className="">
                Canvas
            </div>

            <div>
                <Textarea>
                    
                </Textarea>
            </div>
        </div>)
}

type Player =
    {
        name: string;

    }