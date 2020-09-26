import React from 'react';

export const USER_REG = "USER_REG";

export const userRegistration = async (user) => {
    let userData = {
        'user': JSON.stringify(user)
    }
    console.log("user == ", user);
    try {
        const response = await fetch('https://edloan.free.beeceptor.com/my/api/path', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: userData
        });

        if (!response.ok) {
            let errorResData = await response.json();
            console.log("errorResData == ", JSON.stringify(errorResData));
            throw new Error("Something went wrong!");
        }

        const resData = await response.json();
        console.log('resData() =user= ', resData);

        if (resData.success){
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log("Exception :: ", error);
        throw error;
    }
}