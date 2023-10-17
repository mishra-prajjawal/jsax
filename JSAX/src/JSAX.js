/**
 * A class that provides various methods for generating random values.
 * @class
 */
class Random{
    /**
     * Returns a random integer between the specified minimum and maximum values (inclusive).
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @returns {number} A random integer between min and max.
     */
    static random(min, max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * Generates a random number between the given minimum and maximum values.
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @returns {number} A random number between the given minimum and maximum values.
    */
    static random_range(start, stop, step) {
        if (step == undefined) {
            step = 1;
        }
        let arr = [];
        for (let i = start; i < stop; i += step) {
            arr.push(i);
        }
        return randchoice(arr);
    }
    /**
     * Generates a random string of the specified length, consisting of uppercase and lowercase letters and digits.
     * @param {number} length - The length of the string to generate.
     * @returns {string} A random string of the specified length.
    */
    static random_string(length) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    /**
     * Generates a random hexadecimal color code.
     * @returns {string} The random color code in the format "#RRGGBB".
     */
    static random_color() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    /**
     * Generates a random ID of the specified length.
     * @param {number} length - The length of the ID to generate.
     * @returns {string} - The generated ID.
     */
    static random_id(length) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    /**
     * Generates a random session id for the client with the following format,
     * XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX.
     * 
     * @returns {string} A 32-character string with a dash every 4 characters.
     * 
     * @immutable
     */
    static random_session_id(){
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        /*After every 4 characters adding a dash*/
        for (let i = 0; i < 32; i++) {
            if (i % 4 == 0 && i != 0) {
                result += "-";
            }
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    /**
     * Generates a random session ID with a given total length, dash every and charset.
     * @param {number} total_length - The total length of the session ID.
     * @param {number} dash_every - The number of characters after which a dash should be added.
     * @param {string} charset - The set of characters to be used for generating the session ID.
     * @throws {string} - Throws an error if total_length is less than dash_every or if total_length is not divisible by dash_every.
     * @returns {string} - Returns a randomly generated session ID.
     */
    static random_session_id_mutable(total_length=32, dash_every=4,charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"){

        /*pre-checks for any errors*/
        if(total_length < dash_every){
            throw "[Error]:: total_length must be greater than dash_every";
        } else if(total_length % dash_every != 0){
            throw "[Error]:: total_length must be divisible by dash_every";
        } else if(charset.length < 8){
            /**
             * To generate a secure session ID a client must have more than equal to 8 chars,
             * for a possiblity of 40320 possible permutations at minimum 
            */ 
            throw "[Error]:: charset must be greater than 8 characters";
        }

        let result = "";
        for (let i = 0; i < total_length; i++) {
            if (i % dash_every == 0 && i != 0) {
                result += "-";
            }
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }
    /**
     * Generates a random cookie for the client with the following format: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX.
     * @param {number} [total_length=64] - The total length of the characters that the function will generate.
     * @param {number} [dash_every=4] - The number of characters after which a dash will be added.
     * @param {string} [charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-_.+"] - The characters that the function will use to generate the cookie.
     * @returns {string} The generated cookie string.
     */
    static random_cookie_gen(){
        /*pre-checks for errors*/
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-_.+";
        /*Generating a secure 64bit Cookie string*/
        for (let i = 0; i < 64; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result; 
    }
    /**
     * Generates a random cookie string with the specified length and character set.
     * @param {number} total_length - The total length of the cookie string to be generated.
     * @param {string} charset - The character set to be used for generating the cookie string.
     * @throws {string} "[Error]:: charset must be greater than 8 characters" - If the charset length is less than 8.
     * @throws {string} "[Error]:: total_length must be greater than or equal to 32" - If the total_length is less than 32.
     * @returns {string} The generated cookie string.
     */
    static random_cookie_gen_mutable(total_length=64,charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-_.+"){
        /*pre-checks for errors*/
        if(charset.length < 8){
            /**
             * To generate a secure cookie a client must have more than equal to 8 chars,
             * for a possiblity of 40320 possible permutations at minimum 
            */ 
            throw "[Error]:: charset must be greater than 8 characters";
        } else if (total_length < 32){
            /**
             * To generate a secure cookie a client must have more than equal to 32 chars,
             * 2.6313084e+35 possible permutations at minimum 
             * or a minimum 256 bits of entropy
             */
            throw "[Error]:: total_length must be greater than or equal to 32";
        }
        let result = "";
        for (let i = 0; i < total_length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result; 
    }
}
/**
 * A class to handle cookies with ease.
 * @class
 */
class Cookies{
    /**
     * Sets a cookie with the given name, content and expiration time.
     * @param {string} name - The name of the cookie.
     * @param {string} content - The content of the cookie.
     * @param {number} time - The expiration time of the cookie in days.
     * @returns {boolean} - Returns true if the cookie was successfully set, false otherwise.
     */
    static set_cookie(name,content,time){
        let d = new Date();
        d.setTime(d.getTime() + (time*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + content + ";" + expires + ";path=/";
        return true;
    }
    /**
     * Deletes a cookie with the specified name.
     * @param {string} name - The name of the cookie to delete.
     * @returns {boolean} True if the cookie was successfully deleted, false otherwise.
     */
    static delete_cookie(name){
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        return true;
    }
    /**
     * Checks if a cookie with the specified name exists.
     * @param {string} cname - The name of the cookie to check.
     * @returns {boolean} True if the cookie exists, false otherwise.
     */
    static is_cookie(cname){
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Gets the content of a cookie with the specified name.
     * @param {string} cname - The name of the cookie to get.
     * @returns {string} The content of the cookie.
     */
    static get_cookie(cname){
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}
/**
 * A class that provides various methods for generating random values.
 * @class
*/
class Clock{
    /**
     * returns a an array of the current time in the format [hours, minutes, seconds].
     * @returns {array} An array of the current time in the format [hours, minutes, seconds].
    */
    static time(){
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        return [h, m, s];
    }
    /**
     * Returns the current time in 12 or 24 hour format with optional separator and response type.
     * @param {string} [format="12"] - The format of the time. Either "12" or "24".
     * @param {string} [separator=":"] - The separator between hours, minutes, and seconds.
     * @param {string} [responseType="string"] - The type of response. Either "string" or "array".
     * @throws {string} - Throws an error if format is not "12" or "24", separator is not a single character, or responseType is not "string" or "array".
     * @returns {string|array} - The formatted time as a string or array depending on the responseType parameter.
     */
    static formatted_time(format="12",separator=":",responseType="string"){
        /*pre checks*/
        if(format != "12" && format != "24"){
            throw "[Error]:: format must be either 12 or 24";
        } else if(separator.length > 1){
            throw "[Error]:: separator must be a single character";
        } else if(responseType != "string" && responseType != "array"){
            throw "[Error]:: responseType must be either string or array";
        }
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let suffix = "AM";
        if(h > 12){
            h -= 12;
            suffix = "PM";
        } else if(h == 12){
            suffix = "PM";
        } else if(h == 0){
            h = 12;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if(responseType == "array"){
            return [h, m, s];
        } else {
            return h + separator + m + separator + s + " " + suffix;
        }
    }
        
    /**
     * returns a an array of the current date in the format [day, month, year].
     * @returns {array} An array of the current date in the format [day, month, year].
    */
    static date(){
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        return [day, month, year];
    }
    /**
     * returns a an array of the current date and time in the format [day, month, year, hours, minutes, seconds].
     * @returns {array} An array of the current date and time in the format [day, month, year, hours, minutes, seconds].
    */
    static datetime(){
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        return  [day, month, year, h, m, s];
    }
    /**
     * returns a an array of the current date and time in the format [day, month, year, hours, minutes, seconds].
     * @returns {array} An array of the current date and time in the format [day, month, year, hours, minutes, seconds].
    */
    static zone(){
        let d = new Date();
        let zone = d.getTimezoneOffset();
        return zone;
    }
    /**
     * returns a an array of the current date and time in the format [day, month, year, hours, minutes, seconds].
     * @returns {array} An array of the current date and time in the format [day, month, year, hours, minutes, seconds].
    */
    static timezone(){
        let d = new Date();
        let zone = d.getTimezoneOffset();
        let hours = Math.floor(zone / 60);
        let minutes = zone % 60;
        return [hours, minutes];
    }
    /**
     * Returns the current Unix time in the specified format.
     * @param {string} format - The format of the Unix time to return. Valid values are "seconds", "milliseconds", "hours", or "minutes".
     * @returns {number} The current Unix time in the specified format.
     * @throws {string} If an invalid format is provided.
     */
    static unix_time(format="seconds"){
        /*Pre-checks for ERRORS*/
        args = ["seconds","milliseconds","hours","minutes"]
        if(args.indexOf(format) == -1){
            throw "ERROR: Invalid format. Please use seconds, milliseconds, hours, or minutes.";
        }
        if(format == "seconds"){
            return Math.floor(Date.now() / 1000);
        } else if (format=="milliseconds"){
            return Date.now();
        } else if (format=="hours"){
            return Math.floor(Date.now() / 1000 / 60 / 60);
        } else if (format=="minutes"){
            return Math.floor(Date.now() / 1000 / 60);
        }
    }
    /**
     * Sets a interval for the specified time.
     * @param {function} method - The method to be called after the specified time.
     * @param {number} time - The time after which the method will be called.
     */
    static setgap(method, time){
        setInterval(method, time);
    }
    /**
     * Sets a timeout for the specified time.
     * @param {function} method - The method to be called after the specified time.
     * @param {number} time - The time after which the method will be called.
     */
    static setout(method, time){
        setTimeout(method, time);
    }
    /**
     * Clears the specified timeout.
     * @param {function} method - The method to be cleared.
     */
    static clearout(method){
        clearTimeout(method);
    }
    /**
     * Clears the specified interval.
     * @param {function} method - The method to be cleared.
     */
    static cleargap(method){
        clearInterval(method);
    }

}
/**
 * A class representing a local storage object.
 */
class Localstorage{
    /**
     * Sets an item in the local storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static set_item(key,value){
        try {
            localStorage.setItem(key,value);
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets an item from the local storage.
     * @param {string} key - The key to get.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the value associated with the key.
     */
    static get_item(key){
        try {
            const value = localStorage.getItem(key);
            if (value === null) {
                throw new Error(`Key ${key} does not exist in local storage`);
            }
            return value;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Removes an item from the local storage.
     * @param {string} key - The key to remove.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static remove_item(key){
        try {
            localStorage.removeItem(key);
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Clears the local storage.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static clear(){
        try {
            localStorage.clear();
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Checks if a key exists in the local storage.
     * @param {string} key - The key to check.
     * @returns {boolean|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns true if the key exists, false otherwise.
     */
    static is_key(key){
        try {
            const value = localStorage.getItem(key);
            if (value === null) {
                return false;
            }
            return true;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the number of items in the local storage.
     * @returns {number|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the number of items in the local storage.
     */
    static get_length(){
        try {
            return localStorage.length;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the key at the specified index in the local storage.
     * @param {number} index - The index of the key to get.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the key at the specified index.
     */
    static get_key(index){
        try {
            const key = localStorage.key(index);
            if (key === null) {
                throw new Error(`Index ${index} does not exist in local storage`);
            }
            return key;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the entire local storage object.
     * @returns {Storage|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the local storage object.
     */
    static storage(){
        try {
            return localStorage;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Updates an item in the local storage.
     * @param {string} key - The key to update.
     * @param {string} value - The new value to set.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static update(key,value){
        try {
            localStorage.setItem(key,value);
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the total number of bytes used by the local storage.
     * @returns {number|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the total number of bytes used by the local storage.
     */
    static get_bytes(){
        try {
            let total = 0;
            for(let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                total += key.length + value.length;
            }
            return total;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }
}
class Sessionstorage{
    /**
     * Sets an item in the session storage.
     * @param {string} key - The key to set.
     * @param {string} value - The value to set.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static set_item(key,value){
        try {
            sessionStorage.setItem(key,value);
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets an item from the session storage.
     * @param {string} key - The key to get.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the value associated with the key.
     */
    static get_item(key){
        try {
            const value = sessionStorage.getItem(key);
            if (value === null) {
                throw new Error(`Key ${key} does not exist in session storage`);
            }
            return value;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Removes an item from the session storage.
     * @param {string} key - The key to remove.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static remove_item(key){
        try {
            sessionStorage.removeItem(key);
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Clears the session storage.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static clear(){
        try {
            sessionStorage.clear();
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Checks if a key exists in the session storage.
     * @param {string} key - The key to check.
     * @returns {boolean|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns true if the key exists, false otherwise.
     */
    static is_key(key){
        try {
            const value = sessionStorage.getItem(key);
            if (value === null) {
                return false;
            }
            return true;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the number of items in the session storage.
     * @returns {number|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the number of items in the session storage.
     */
    static get_length(){
        try {
            return sessionStorage.length;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the key at the specified index in the session storage.
     * @param {number} index - The index of the key to get.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the key at the specified index.
     */
    static get_key(index){
        try {
            const key = sessionStorage.key(index);
            if (key === null) {
                throw new Error(`Index ${index} does not exist in session storage`);
            }
            return key;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }

    /**
     * Gets the entire session storage object.
     * @returns {Storage|string} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns the session storage object.
     */
    static storage(){
        try {
            return sessionStorage;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }
}
class Audio{
    constructor(){
        this._audio = new Audio();
    }
    /**
     * A function to set volume to the specified value.
     * @param {number} volume - The volume to set.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     * @throws {string} - Throws an error if the volume is not between 0 and 1.
     */
    static set_volume(volume){
        try {
            if(volume < 0 || volume > 1){
                throw "[ERROR]:: Volume must be between 0 and 1";
            }
            this._audio.volume = volume;
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }
    /**
     * A function to get the current volume.
     * @returns {number} Returns the current volume.
     */
    static get_volume(){
        return this._audio.volume;
    }
    /**
     * Pauses the currently playing audio.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static pause(){
        try {
            this._audio.pause();
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }
    /**
     * Stops the currently playing audio.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static clear_time(){
        try {
            this._audio.pause();
            this._audio.currentTime = 0;
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    } 
    /**
     * Plays the specified audio file.
     * @param {string} file - The audio file to play.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static play(file){
        try {
            this._audio.src = file;
            this._audio.play();
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }
    /**
     * Checks if the audio is paused.
     * @returns {boolean} Returns true if the audio is paused, false otherwise.
     */ 
    static is_paused(){
        return this._audio.paused;
    }
    /**
     * Checks if the audio is playing.
     * @returns {boolean} Returns true if the audio is playing, false otherwise.
     */
    static is_playing(){
        return !this._audio.paused;
    }
    /**
     * Gets the duration of the audio file.
     * @returns {number} Returns the duration of the audio file.
     */
    static get_duration(){
        return this._audio.duration;
    }
    /**
     * Gets the current time of the audio file.
     * @returns {number} Returns the current time of the audio file.
     */
    static get_current_time(){
        return this._audio.currentTime;
    }
    /**
     * Sets the current time of the audio file.
     * @param {number} time - The time to set.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     */
    static set_current_time(time){
        try {
            this._audio.currentTime = time;
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }
    /**
     * Gets the audio element.
     * @returns {Audio} Returns the audio element.
     */
    static get_audio(){
        return this._audio;
    }
    /**
     * Releases the audio element memory.
     * @returns {string|number} Returns `[ERROR]:: ${problem}` if there is a problem, otherwise returns 1.
     * @throws {string} - Throws an error if the audio is playing.
     * @throws {string} - Throws an error if the audio is paused.
     * @throws {string} - Throws an error if the audio is not set.
     * @throws {string} - Throws an error if the audio is not an instance of Audio.
     * @throws {string} - Throws an error if the audio is not an instance of HTMLAudioElement.
     */
    static release(){
        try {
            if(this.is_playing()){
                throw "[ERROR]:: Audio is playing";
            } else if(this.is_paused()){
                throw "[ERROR]:: Audio is paused";
            } else if(this._audio == undefined){
                throw "[ERROR]:: Audio is not set";
            } else if(!(this._audio instanceof Audio)){
                throw "[ERROR]:: Audio is not an instance of Audio";
            } else if(!(this._audio instanceof HTMLAudioElement)){
                throw "[ERROR]:: Audio is not an instance of HTMLAudioElement";
            }
            this._audio = undefined;
            return 1;
        } catch (error) {
            return `[ERROR]:: ${error}`;
        }
    }   
}
class Device{
    os(){
        let os = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1) os = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) os = "UNIX";
        if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";
        return os;
    }
    deviceInfo(){
        let deviceInfo = navigator.userAgent;
        return deviceInfo;
    }
    is_windows(){
        if (navigator.appVersion.indexOf("Win") != -1) return true;
        return false;
    }
    is_mac(){
        if (navigator.appVersion.indexOf("Mac") != -1) return true;
        return false;
    }
    is_unix(){
        if (navigator.appVersion.indexOf("X11") != -1) return true;
        return false;
    }
    is_linux(){
        if (navigator.appVersion.indexOf("Linux") != -1) return true;
        return false;
    }
    is_mobile(){
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){
            return true;
        }
        return false;
    }
    is_desktop(){
        if(this.is_mobile()){
            return false;
        }
        return true;
    }
    architecture(){
        let architecture = navigator.userAgentData.getHighEntropyValues(["architecture"]);
        return architecture;
    }
    model(){
        let model = navigator.userAgentData.getHighEntropyValues(["model"]);
        return model;
    }
    platform(){
        let platform = navigator.userAgentData.getHighEntropyValues(["platform"]);
        return platform;
    }
    platformVersion(){
        let platformVersion = navigator.userAgentData.getHighEntropyValues(["platformVersion"]);
        return platformVersion;
    }
    async fullVersionList() {
        try {
          const { fullVersionList } = await navigator.userAgentData.getHighEntropyValues(['fullVersionList']);
          const expandedList = fullVersionList.map(version => `${version.brand} ${version.version}`);
          return expandedList.join(', ');
        } catch (error) {
          console.error(`Failed to get full version list: ${error}`);
          return '';
        }
    }
    get_android_deviceName(){
        navigator.userAgentData
        .getHighEntropyValues([
          "architecture",
          "model",
          "platform",
          "platformVersion",
          "fullVersionList"
        ])
        .then((ua) => {
          const model = ua["model"];
          if (model) console.log("Phone: " + model);
        });
    }
    viewport(){
        let viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        return viewport;
    }
    screen(){
        let screen = {
            width: screen.width,
            height: screen.height
        };
        return screen;
    }
    pixelRatio(){
        let pixelRatio = window.devicePixelRatio;
        return pixelRatio;
    }
    width(){
        let width = window.innerWidth;
        return width;
    }
    height(){
        let height = window.innerHeight;
        return height;
    }
    colorDepth(){
        let colorDepth = screen.colorDepth;
        return colorDepth;
    }
    pixelDepth(){
        let pixelDepth = screen.pixelDepth;
        return pixelDepth;
    }
    orientation(){
        let orientation = window.screen.orientation;
        return orientation;
    }
    is_landscape(){
        if(window.innerWidth > window.innerHeight){
            return true;
        }
        return false;
    }
    is_portrait(){
        if(window.innerWidth < window.innerHeight){
            return true;
        }
        return false;
    }
    get_isSquare(){
        if(window.innerWidth == window.innerHeight){
            return true;
        }
        return false;
    }
    is_fullscreen(){
        if(document.fullscreenElement){
            return true;
        }
        return false;
    }
    get_graphicsDriver(){
        let graphicsDriver = navigator.gpu;
        return graphicsDriver;
    }
    get_coreCount(){
        let coreCount = navigator.hardwareConcurrency;
        return coreCount;
    }
    get_memory(){
        let memory = navigator.deviceMemory;
        return memory;
    }
    get_battery(){
        let battery = navigator.getBattery();
        return battery;
    }
    get_batteryLevel(){
        let battery = navigator.getBattery();
        return battery.level;
    }
    is_charging(){
        let battery = navigator.getBattery();
        return battery.charging;
    }
    get_batteryChargingTime(){
        let battery = navigator.getBattery();
        return battery.chargingTime;
    }
    resolution(format="pixels"){
        let resolution = "";
        if(format == "pixels"){
            resolution = `${window.innerWidth}x${window.innerHeight}`;
        } else if(format == "dpi"){
            resolution = `${window.screen.width}x${window.screen.height}`;
        }
        return resolution;
    }
    has_webcam(){
        let hasWebcam = false;
        navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            devices.forEach(device => {
                if (device.kind == "videoinput") {
                    hasWebcam = true;
                }
            });
        });
        return hasWebcam;
    }
    has_bluetooth(){
        let hasBluetooth = false;
        navigator.bluetooth.getDevices()
        .then(devices => {
            devices.forEach(device => {
                hasBluetooth = true;
            });
        });
        return hasBluetooth;
    }
    has_webGL(){
        let hasWebGL = false;
        if (!!window.WebGLRenderingContext) {
            hasWebGL = true;
        }
        return hasWebGL;
    }
    has_webAudio(){
        let hasWebAudio = false;
        if (!!window.AudioContext) {
            hasWebAudio = true;
        }
        return hasWebAudio;
    }
    has_webVR(){
        let hasWebVR = false;
        if (!!navigator.getVRDisplays) {
            hasWebVR = true;
        }
        return hasWebVR;
    }
    has_webAR(){
        let hasWebAR = false;
        if (!!navigator.getARDisplays) {
            hasWebAR = true;
        }
        return hasWebAR;
    }
    has_gamepad(){
        let hasGamepad = false;
        if (!!navigator.getGamepads) {
            hasGamepad = true;
        }
        return hasGamepad;
    }
    has_touch(){
        let hasTouch = false;
        if (!!navigator.maxTouchPoints) {
            hasTouch = true;
        }
        return hasTouch;
    }
    has_websockets(){
        let hasWebsockets = false;
        if (!!window.WebSocket) {
            hasWebsockets = true;
        }
        return hasWebsockets;
    }
    has_webRTC(){
        let hasWebRTC = false;
        if (!!window.RTCPeerConnection) {
            hasWebRTC = true;
        }
        return hasWebRTC;
    }
    has_canvas(){
        let hasCanvas = false;
        if (!!window.HTMLCanvasElement) {
            hasCanvas = true;
        }
        return hasCanvas;
    }

}
class Browser{
    agent(){
        let browser = navigator.userAgent;
        return browser;
    }
    name(){
        let browserName = navigator.appName;
        return browserName;
    }
    version(){
        let browserVersion = navigator.appVersion;
        return browserVersion;
    }
    get_codeName(){
        let browserCodeName = navigator.appCodeName;
        return browserCodeName;
    }
    platform(){
        let browserPlatform = navigator.platform;
        return browserPlatform;
    }
    language(){
        let browserLanguage = navigator.language;
        return browserLanguage;
    }
    online(){
        let browserOnline = navigator.onLine;
        return browserOnline;
    }
    clipboard(){
        let browserClipboard = navigator.clipboard;
        return browserClipboard;
    }
    cookies(){
        let browserCookies = navigator.cookieEnabled;
        return browserCookies;
    }
    // java(){
    //     let browserJava = navigator.javaEnabled();
    //     return browserJava;
    // }
    
}
