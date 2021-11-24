import React from "react";

/**
 *
 * A form that receives an inputs the word that you want on your plate
 * Display on a fake plate as your write your combination
 *  - The max characters can only be up to 6/7
 *  - Can only take a specific character
 *
 * return different variations of the word inputted
 *
 */

export default function Generator() {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Please enter word" />
                <button>Submit</button>
            </form>
        </div>
    );
}
