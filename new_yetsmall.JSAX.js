$ = (e,index) => {
    let result;
    if (e[0] == '#') {
      result = document.getElementById(e.slice(1));
    } else if (e[0] == '.') {
      result = document.getElementsByClassName(e.slice(1))[0];
    } else {
      result = document.getElementsByTagName(e)[0];
    }
    return result;
};
class rand{
    random(min, max) {
        return Math.random() * (max - min) + min;
    }
    randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    randset(min, max, count=5,floor=false) {
        function rand(min, max) {
            return Math.random() * (max - min) + min;
        }
        function randint(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let arr = [];
        if(floor == false){
            for (let i = 0; i < count; i++) {
                arr.push(rand(min, max));
            }
        }else if(floor == true){
            for (let i = 0; i < count; i++) {
                arr.push(randint(min, max));
            }
        } 
        return arr;
    }
    randchoice(arr) {
        return arr[randint(0, arr.length - 1)];
    }
    randrange(start, stop, step) {
        if (step == undefined) {
            step = 1;
        }
        let arr = [];
        for (let i = start; i < stop; i += step) {
            arr.push(i);
        }
        return randchoice(arr);
    }
    randstr(length) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    randcolor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    randid(length=10) {
        //js random id generator
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    rand_sessid(){
        //js random session id generator
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        //every 4 characters add a dash
        for (let i = 0; i < 32; i++) {
            if (i % 4 == 0 && i != 0) {
                result += "-";
            }
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}
class clck{
    time(type="arr",seperator=":"){
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
        if(type == "arr"){
            return [h, m, s]; //default returns an array
        }else if(type == "str"){
            return h+seperator+m+seperator+s;//return in colon based time 
        }else if(type=="line"){
            return h+" "+m+" "+s; // return a space seperated string
        }else{
            return 0; // if a problem found in the param then it sends the fault with code 0
        }
        
    }
    datetime(type="arr",seperator="-"){
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
        if(type=="arr"){
            return  [day, month, year, h, m, s];//
        }else if(type=="str"){
            return day+seperator+month+seperator+year+" "+h+":"+m+":"+s; //return in a string format 16-01-2001 07:54
        }else{
            return 0; 
        }
        
    }
    zone(){
        let d = new Date();
        let zone = d.getTimezoneOffset();
        return zone;
    }
    timezone(){
        let d = new Date();
        let zone = d.getTimezoneOffset();
        let hours = Math.floor(zone / 60);
        let minutes = zone % 60;
        return [hours, minutes];
    }

}
class list{
    pop(arr){
        return arr.pop();
    }
    push(arr,element){
        return arr.push()
    }
    reverse(arr){
        return arr.reverse();
    }
    shift(arr){
        return arr.shift();
    }
    slice(arr, start, end) {
        var newArr = [];
        for (var i = start; i < end; i++) {
          newArr.push(arr[i]);
        }
        return newArr;
    
    }
    some(arr,method){
        return arr.some(method)
    }
    sort(arr){
        return arr.sort();         
    }
    splice(arr,index,howmany,elemarr){
        arr.splice(index,howmany);
        return arr.concat(elemarr);
    }
    concat(arr,arrS){
        arr.concat(arrS);
    }
    copyWithin(arr,target, start, end){
        arr.copyWithin(target, start, end);
    }
      
}
class ge{
    location(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var latitude = position.coords.latitude;
              var longitude = position.coords.longitude;
              return [latitude,longitude];
            });
        } else {
            return 1;
          }
    }
    ipdev(){
        /*
        *   This file is the entire script combined in working order.
        *   Copyright 2021 © Joey Malvinni
        *   License: MIT
        */

        // [---------------------------------------------------------------------------]
        // File: ip_validator.js

        /*
        *   This module validates the two types of IP addresses.
        *   Copyright 2021 © Joey Malvinni
        *   License: MIT
        *   
        *   Thanks We Acknowledge your efforts!
        */

        function is_ipv4(ip){
            return regex_v4.test(ip);
        };
        
        // Checks if the IPv6 address is valid.
        function is_ipv6(ip){
            return regex_v6.test(ip);
        };
        
        // Simple IP regex that works on both IPv6 and IPv4
        var simpleIPRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
        
        // IPv4 regex used to determine whether an IP is IPv4 or not.
        let regex_v4 = /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/;
        
        // The IPv6 regex used when determining an IPv6 address.
        let regex_v6 = /((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/;
        
        // Exporting the two regexes in an array to be used in the main detector.
        let ip_regex_array = [regex_v6, regex_v4]
        
        
        // [---------------------------------------------------------------------------]
        // File: peer_conn.js
        
        /*
        *   This module provides the main WebRTC functions that return IP addresses from the STUN request.
        *   Copyright 2021 © Joey Malvinni
        *   License: MIT
        */
        
        
        function peer(callback){
            // Creating the peer connection.
            var WebRTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            // Initializing the connection.
            var createdConnection;
        
            // Main start function.
            function start(){
                // Creating the actual connection.
                createConnection()
                // Log the STUN request.
                createStunRequest()
            };
        
            // Stop function to reset the connection.
            function stop(){
                // Checking if the connection has been created or not.
                if (createdConnection) {
                    // Attempt to close it, if RTCPeerConnection.close() is not supported, remove the event listeners.
                    try {
                        createdConnection.close();
                    } finally {
                        createdConnection.onicecandidate = () => {};
                        createdConnection = null;
                    };
                };
            };
        
            // Function that makes the connection request to Google's STUN server
            function createConnection(){
                let iceServers = [{
                    urls: 'stun:stun.l.google.com:19302'
                }];
                // Creating the connection with the STUN server.
                createdConnection = new WebRTCPeerConnection({ iceServers });
                // Handling the ICE candidate event.
                createdConnection.onicecandidate = (data) => handleCandidates(data);
                // Creation of the fake data channel.
                createdConnection.createDataChannel('fake_data_channel');
            };
        
            // Function that creates the STUN request offer needed to get the IPs.
            function createStunRequest(){
                // Create the offer that exposes the IP addresses.
                return createdConnection.createOffer().then(sdp => createdConnection.setLocalDescription(sdp));
            };
        
            // Handling the onIceCandidate event.
            function handleCandidates(ice){
                // Checking if the ICE candidate lines given are valid.
                if (ice && ice.candidate && ice.candidate.candidate) {
                    // Returning the IPs to the main function.
                    callback(ice && ice.candidate && ice.candidate.candidate);
                };
            };
        
            // Returning the main functions needed.
            return {
                start, 
                stop,
                createConnection,
                createStunRequest,
                handleCandidates
            };
        };
        
        // [---------------------------------------------------------------------------]
        // File: public_ip.js
        
        /*
        *   This module provides the worker functions that return the public IP addresses.
        *   Copyright 2021 © Joey Malvinni
        *   License: MIT
        */
        
        
        function publicIPs(timer){
            // Timing validation.
            if(timer) if(timer < 100) throw new Error('Custom timeout cannot be under 100 milliseconds.');
        
            // IPs is the final array of all valid IPs found.
            var IPs = [];
            // Creating the peer connection request while handling the callback event.
            var peerConn = peer(handleIceCandidates);
        
            function getIps(){
                // Returning a promise.
                return new Promise(function(resolve, reject) {
                    // Starting the peer connection.
                    peerConn.start();
                    // Setting the timer.
                    setTimeout(() => {
                        // Checking if the IP array exists.
                        if(!IPs || IPs === []){
                            // Rejecting the error
                            reject('No IP addresses were found.')
                        } else {
                            // Return the unique IP addresses in an array.
                            resolve(unique(IPs.flat(Infinity)))
                        };
                        // reset the peer connection.
                        reset();
                    // Set the Timeout to the custom timer, default to 500 milliseconds.
                    }, timer || 500);
                });
            };
        
            function handleIceCandidates(ip){
                var array = [];
                // Looping over the two regexs for IPv6 and IPv4
                for(let regex of ip_regex_array){
                    let arr = [];
                    // Lutting all of the strings that match either IP format in an array
                    let possible_ips_array = regex.exec(ip)
                    if(possible_ips_array){
                        // Looping over that array
                        for(let i = 0; i < possible_ips_array.length; i++){
                            // Checking if the "IP" is valid
                            if(is_ipv4(possible_ips_array[i]) || is_ipv6(possible_ips_array[i])){
                                arr.push(possible_ips_array[i])
                            };
                        };
                        array.push(arr);
                    };
                };
                // Final function that does more checks to determine the array's validity,
                // Also flattens the array to remove extraneous sub-arrays.
                push(array.flat(Infinity))
            };
        
            function push(ip){
                // Checks if the IP addresses givin are already in the array. 
                if(!IPs.includes(ip)){
                    IPs.push(unique(ip.flat(Infinity)));
                };
            };
        
            function reset(){
                // Stops the peer connection to the STUN server.
                peerConn.stop()
            };
            // Use this to only return unique IP addresses.
            function unique(a) {
                return Array.from(new Set(a));
            };
        
            return getIps();
        };
        
        // [---------------------------------------------------------------------------]
        // File: index.js
        
        /*
        *   This module combines all of the worker modules into the main functions that get exported.
        *   Copyright 2021 © Joey Malvinni
        *   License: MIT
        */
        
        // Categorizes the IPs by IP, type, and IPv4.
        function getIPTypes(timer){
            // Returning the result as a promise.
            return new Promise(function(resolve, reject) {
                // Final array
                let finalIpArray = []
                // Getting the raw IPs in an array.
                publicIPs(timer).then((ips)=>{
                    // Looping over each IP.
                    ips.forEach(ip => {
                        if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
                            // The IP is private.
                            finalIpArray.push({ ip: ip, type: 'private', IPv4: true })
                        } else if (ip.match(/((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/)) {
                            // The IP is an IPv6 address.
                            finalIpArray.push({ ip: ip, type: 'IPv6', IPv4: false })
                        } else {
                            // Assume the IP is public.
                            finalIpArray.push({ ip: ip, type: 'public', IPv4: true })
                        }
                    })
                    // Resolving the promise.
                    resolve(finalIpArray)
                }).catch(reject)
            })
        }
        
        // Filters out IPv4 addresses.
        function getIPv4(timer) {
            return getIPTypes(timer).then(ips => {
                // Filters the IP by IPv4.
                const ip = ips.filter(ip => ip.IPv4);
                // Loops over each object and extracts the IP.
                for(let i = 0; i < ip.length; i++){
                    ip[i] = ip[i].ip
                }
                // Returns undefined if the array is empty.
                return ip ? ip : '';
            });
        }
        
        // Filters out IPv6 addresses.
        function getIPv6(timer) {
            // Getting the IPs by type.
            return getIPTypes(timer).then(ips => {
                // Filtering the IPs by IPv6.
                const ip = ips.filter(ip => ip.type === 'IPv6');
                // Extracting the IPs
                for(let i = 0; i < ip.length; i++){
                    // Removing all other data from the object.
                    ip[i] = ip[i].ip
                }
                // Returning the IP or undefined.
                return ip ? ip.ip : '';
            });
        }
        
        // Returns all of the functions in an object, default to getting all of the IPs without any filtering applied.
        function getIPs(timer){
            return Object.assign(
                publicIPs(timer), {
                    types: getIPTypes,
                    public: publicIPs,
                    IPv4: getIPv4,
                    IPv6: getIPv6,
                }
            )
        };

    }
    ipon(agent=1){
        if(agent==1){
            //https://www.cloudflare.com/cdn-cgi/trace -> CloudFlare
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    return json.ip;
                }
            }   
        }else if(agent==2){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.ipify.org?format=json", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    return json.ip;
                }
            };
        }else if(agent==3){
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.my-ip.io/ip.json", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    return json.ip;
                }
            };
        }else if(agent==4){
            var xhr = new XMLHttpRequest();
            xhr.open("GET","https://ip.seeip.org/jsonip",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var json = JSON.parse(xhr.responseText);
                    return json.ip;
                }
            }
        }else if(agent==5){
            var xhr = new XMLHttpRequest();
            xhr.open("GET","http://gd.geobytes.com/GetCityDetails?callback=?",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var json = JSON.parse(xhr.responseText);
                    return json.geobytesremoteip;
                }
            }
        }else if(agent==6){
            var xhr = new XMLHttpRequest();
            xhr.open("GET","https://json.geoiplookup.io/?callback=?",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var json = JSON.parse(xhr.responseText);
                    return json.geobytesremoteip;
                }
            }
        }else if(agent == 7){
            
            var xhr = new XMLHttpRequest();
            xhr.open("GET","https://ipinfo.io/json",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var json = JSON.parse(xhr.responseText);
                    return json.geobytesremoteip;
                }
            }
        }else if(agent == 8){
            
            var xhr = new XMLHttpRequest();
            xhr.open("GET","https://api.myip.ms/v1/ip",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var json = JSON.parse(xhr.responseText);
                    return json.geobytesremoteip;
                }
            }
        }else if(agent == 9){
            
            var xhr = new XMLHttpRequest();
            xhr.open("GET","http://ip-api.com/json",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var json = JSON.parse(xhr.responseText);
                    return json.geobytesremoteip;
                }
            }
        }
        
    }

}

class cokie{
    constructor(){
        this.cookie = document.cookie;
    }
    set(name,value,days){
        var d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    get(name){
        var name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    check(name){
        var user = this.getCookie(name);
        if (user != "") {
            return true;
        } else {
            return false;
        }
    }
    delete(name){
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}
class sesion{
    constructor(){
        this.session = sessionStorage;
    }
    set(key,value){
        sessionStorage.setItem(key,value);
    }
    get(key){
        return sessionStorage.getItem(key);
    }
    check(key){
        if(sessionStorage.getItem(key) == null){
            return false;
        }else{
            return true;
        }
    }
    delete(key){
        sessionStorage.removeItem(key);
    }
}
class localstorge{
    constructor(){
        this.localstorage = localStorage;
    }
    set(key,value){
        localStorage.setItem(key,value);
    }
    get(key){
        return localStorage.getItem(key);
    }
    check(key){
        if(localStorage.getItem(key) == null){
            return false;
        }else{
            return true;
        }
    }
    delete(key){
        localStorage.removeItem(key);
    }
}
class requests{
    constructor(){
        this.requests = new XMLHttpRequest();
    }
    get(url){
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                return xhr.responseText;
            }
        }
    }
    post(url,data){
        var xhr = new XMLHttpRequest();
        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                return xhr.responseText;
            }
        }
        xhr.send(data);
    }
    getjson(url){
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var json = JSON.parse(xhr.responseText);
                return json;
            }
        }
    }
    postjson(url,data){
        var xhr = new XMLHttpRequest();
        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                var json = JSON.parse(xhr.responseText);
                return json;
            }
        }
        xhr.send(data);
    }
    
}
class brwser{
    constructor(){
        this.browser = navigator.userAgent;
    }
    get(){
        return navigator.userAgent;
    }
    check(){
        var ua = navigator.userAgent;
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || ua.indexOf(' OPR/') >= 0;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        var isChrome = !!window.chrome && !!window.chrome.webstore;
        var isIE = false || !!document.documentMode;
        if(isOpera){
            return "Opera";
        }else if(isFirefox){
            return "Firefox";
        }else if(isSafari){
            return "Safari";
        }else if(isChrome){
            return "Chrome";
        }else if(isIE){
            return "IE";
        }else{
            return "Unknown";
        }
    }
    location(){
        return location;
    }
    navigator(){
        return navigator;
    }
    screen(){
        return screen;
    }
    history(){
        return history;
    }
    language(){
        return navigator.language;
    }
    platform(){
        return navigator.platform;
    }
    onlinestatus(){
        return navigator.onLine;
    }
    cookies(){
        return navigator.cookieEnabled;
    }
    all(){
        return navigator;
    }

}
class regx{
    constructor(){
        this.regx = new RegExp();
    }
    match(regx,text){
        return regx.test(text);
    }
    replace(regx,text,replace){
        return text.replace(regx,replace);
    }
    search(regx,text){
        return text.search(regx);
    }
    split(regx,text){
        return text.split(regx);
    }
}
class notif{
    prompt(title,text){
        return prompt(title,text);
    }
    alert(title,text){
        alert(title,text);
    }
    confirm(title,text){
        confirm(title,text);
    }

}
class crypt{
    //crypto module 
    //import crypto module in vanilla js

    genkey(){ //generate key for encrypt and decrypt
        return crypto.getRandomValues(new Uint32Array(1))[0];
    }
    sha256(text){ //sha256 hash
        var sha256 = crypto.createHash('sha256');
        sha256.update
        return sha256.digest('hex');
    }
    sha512(text){ //sha512 hash
        var sha512 = crypto.createHash('sha512');
        sha512.update
        return sha512.digest('hex');
    }
    md5(text){ //   md5 hash
        var md5 = crypto.createHash('md5');
        md5.update
        return md5.digest('hex');
    }
    sha1(text){ // sha1 hash
        var sha1 = crypto.createHash('sha1');
        sha1.update
        return sha1.digest('hex');
    }
    sha3(text){ // sha3 hash
        var sha3 = crypto.createHash('sha3');
        sha3.update
        return sha3.digest('hex');
    }
    ripemd160(text){ // ripemd160 hash
        var ripemd160 = crypto.createHash('ripemd160');
        ripemd160.update
        return ripemd160.digest('hex');
    }
    hmacsha256(text){ // hmacsha256 hash
        var hmacsha256 = crypto.create
        hmacsha256.update
        return hmacsha256.digest('hex');
    }
}
const random = new rand(); // random module
const clock = new clck(); // clock module
const geo = new ge(); // geo module
const cookie = new cokie(); // cookie module
const session = new sesion(); // session module
const localstorage = new localstorge(); // localstorage module
const request = new requests(); // request module
const browser = new brwser(); // browser module
const re = new regx(); // regx module
const array = new list(); // array module
const notification = new notif(); // notif module
const println = console.log; //is a variable to short console.log
