// home js 

const bin = "BLUE";
const time = '250 years';
const result = "Product1, Product2";
const driver_pic = document.querySelector("#driver_pic");
const city_pic = document.querySelector(".city_pic");
const home_page = document.querySelector("#home_page");
const top_image = document.querySelector("#top_img");
const scroll_button = document.querySelector('#scroll_button');
const run_text = document.querySelector('#run_text');
const search_button = document.querySelector("#search_button");
const search_bar = document.querySelector("#search_bar");
search_button.addEventListener('click', () => {
    let search_word = search_bar.value.trim();
    if (search_word.length < 1) {
        alert("Search bar is empty");
    }
    else {
        if (bin == "BLUE") {
            run_text.innerHTML = `Yo! it's a recyclable product. Put that in the <span style="color:${bin}; font-size:1.2em;padding:5px;"> ${bin}</span>  bin.Lets go to recycle plant to know more details about it.<br><br><span style="font-family: 'Titillium Web', sans-serif;font-size: 15px;font-weight: bold;">search another item?<span id="another">click here</span></span>`;
            search_bar.setAttribute("style", "display:none;");
            city_pic.setAttribute("style", "position:absolute;");
            search_button.setAttribute("style", "display:none;");
            scroll_button.setAttribute("style", "display:block;");
            const another = document.querySelector("#another");
            another.addEventListener('click', () => {

                location.reload();
                window.scrollTo(0, 0);
            });
        }
        if (bin == "GREEN") {
            run_text.innerHTML = `Yo! it's not a recyclable product. Put that in the <span style="color:${bin}; font-size:1.2em;padding:5px;"> ${bin}</span>  bin.`;
            city_pic.setAttribute("style", "position:fixed;");
            search_bar.value = ``;
            search_bar.focus();
            scroll_button.setAttribute("style", "display:none;");
        }
        if (bin == "BLACK") {
            run_text.innerHTML = `Yo! it's not a recyclable product .Put that in the <span style="color:${bin}; font-size:1.2em;padding:5px;"> ${bin}</span>  bin.`;
            city_pic.setAttribute("style", "position:fixed;");
            search_bar.value = ``;
            search_bar.focus();
            scroll_button.setAttribute("style", "display:none;");
        }
    }


});
scroll_button.addEventListener('click', () => {
    let j = window.pageXOffset;
    let scroll_ani = setInterval(() => {
        window.scrollTo(j, 0);
        j += 3;
        if (j >= 1800)
            clearInterval(scroll_ani);
    }, 10);
});

top_image.addEventListener('click', () => {
    window.scrollTo(0, 0);
    location.reload();
});
window.onscroll = () => {
    if (window.pageXOffset > 1600) {
        top_image.setAttribute("style", "display:block;");
        run_text.innerHTML = `According to the details given by recycling unit, this product takes <span style="color:tomato;">${time}</span> to decompose if it reach land fills. Good that we brought it here. Now they can make <span style="color:tomato;">${result}</span> out of it.<br><br><span style="font-family: 'Titillium Web', sans-serif;font-size: 15px;font-weight: bold;">Had one more item?<span id="another">click here</span></span>`;
        const another = document.querySelector("#another");
        another.addEventListener('click', () => {
            location.reload();
            window.scrollTo(0, 0);
        });
        search_bar.setAttribute("style", "display:none;");
        search_button.setAttribute("style", "display:none;");
        scroll_button.setAttribute("style", "display:none;");
    }
    else { top_image.setAttribute("style", "display:none;"); }
}












// login js
let blink_fn = msg_box => {
    let c = 0;
    let blink = setInterval(() => {
        if (c % 2 == 0) {
            msg_box.setAttribute("style", "Display:block;");
            c++;
        }
        else {
            msg_box.setAttribute("style", "Display:none;");
            c++;
        }
        if (c > 4) {
            clearInterval(blink);
        }
    }, 100);
};
const err_msg = document.querySelector("#err_msg");
const msg = document.querySelector("#msg");
const sucess_msg = document.querySelector("#sucess_msg");
const smsg = document.querySelector("#smsg");
const login_page = document.querySelector("#login_page");
const login_button = document.querySelector("#login_button");
const already_log = document.querySelector("#already_log");
const already_sign = document.querySelector('#already_sign');
const sign_form = document.querySelector("#signup_form");
const log_form = document.querySelector("#login_form");
already_log.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    log_form.setAttribute("style", "Display:none;");
    sign_form.setAttribute("style", "Display:block;");
});

already_sign.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    sign_form.setAttribute("style", "Display:none;");
    log_form.setAttribute("style", "Display:block;");
});
login_button.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    login_button.setAttribute("style", "border-bottom:2px solid tomato;color:black");
    about_button.setAttribute("style", "border:none;color:grey");
    bookings_button.setAttribute("style", "border:none;color:grey");
    about_page.setAttribute("style", "Display:none;");
    bookings_page.setAttribute("style", "Display:none;");
    home_page.setAttribute("style", "Display:none;");
    driver_pic.setAttribute("style", "Display:block;");
    login_page.setAttribute("style", "Display:block;");
});

//   signup validation

sign_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fname = sign_form.fname.value.trim();
    let lname = sign_form.lname.value.trim();
    let email = sign_form.email.value.trim();
    let phno = sign_form.phno.value.trim();
    let password = sign_form.password.value.trim();
    let repassword = sign_form.repassword.value.trim();
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    let phpattern = /^[0-9]{10,10}$/;
    let pattern1 = /^[a-zA-Z0-9@$!#%^&*]{6,15}$/;
    let pattern2 = /[a-z]/;
    let pattern3 = /[A-Z]/;
    let pattern4 = /[0-9]/;
    let pattern5 = /[@$!#%^&*]/;
    let pattern6 = /[@]/;
    let pattern7 = /[.]/;
    if (fname.length < 1) {
        msg.textContent = "Firstname field can't be empty.";
        sign_form.fname.focus();
        blink_fn(err_msg);

    }
    else if (lname.length < 1) {
        msg.textContent = "Lastname field can't be empty.";
        sign_form.lname.focus();
        blink_fn(err_msg);
    }
    else if (email.length < 1) {
        msg.textContent = "Email field can't be empty.";
        sign_form.email.focus();
        blink_fn(err_msg);
    }
    else if (!pattern6.test(email)) {
        msg.textContent = "Email field is missing '@'char.";
        sign_form.email.focus();
        blink_fn(err_msg);
    }
    else if (!pattern7.test(email)) {
        msg.textContent = "Email field is missing '.'char.";
        sign_form.email.focus();
        blink_fn(err_msg);
    }
    else if (atpos < 1 || (dotpos - atpos < 2)) {
        msg.textContent = "Check '@' and '.' positions.";
        sign_form.email.focus();
        blink_fn(err_msg);

    }
    else if (phno.search(phpattern)) {
        msg.textContent = "Ph-no entered is invalid.";
        sign_form.phno.focus();
        blink_fn(err_msg);
    }
    else if (password.search(pattern1)) {
        msg.textContent = "Password need 6-15 characters from [a-z,A-Z,0-9,@$!#%^&*].";
        sign_form.password.focus();
        blink_fn(err_msg);
    }
    else if (!pattern2.test(password)) {
        msg.textContent = " Need atleast one [a-z].";
        sign_form.password.focus();
        blink_fn(err_msg);
    }
    else if (!pattern3.test(password)) {
        msg.textContent = "Need atleast one [A-Z].";
        sign_form.password.focus();
        blink_fn(err_msg);
    }
    else if (!pattern4.test(password)) {
        msg.textContent = "Need atleast one [0-9].";
        sign_form.password.focus();
        blink_fn(err_msg);
    }
    else if (!pattern5.test(password)) {
        msg.textContent = "Need atleast one of @$!#%^&*.";
        sign_form.password.focus();
        blink_fn(err_msg);
    }

    else if (repassword != password) {
        msg.textContent = "Passwords didn't match.";
        sign_form.repassword.focus();
        blink_fn(err_msg);
    }
    else {
        smsg.textContent = "sucessfully received.";
        err_msg.setAttribute("style", "display:none;");
        sucess_msg.setAttribute("style", "display:block;");
        blink_fn(sucess_msg);
        setInterval(() => {
            sucess_msg.setAttribute("style", "display:none;");
        }, 2500);
        signup_form.reset();
    }
});

//   login form validation

log_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let lemail = log_form.lemail.value.trim();
    let lpassword = log_form.lpassword.value.trim();
    latpos = lemail.indexOf("@");
    ldotpos = lemail.lastIndexOf(".");
    let pattern6 = /[@]/;
    let pattern7 = /[.]/;
    let pattern1 = /^[a-zA-Z0-9@$!#%^&*]{6,15}$/;
    if (lemail.length < 1) {
        msg.textContent = "Email field can't be empty.";
        log_form.lemail.focus();
        blink_fn(err_msg);
    }
    else if (!pattern6.test(lemail)) {
        msg.textContent = "Email field is missing '@'char.";
        log_form.lemail.focus();
        blink_fn(err_msg);
    }
    else if (!pattern7.test(lemail)) {
        msg.textContent = "Email field is missing '.'char.";
        log_form.lemail.focus();
        blink_fn(err_msg);
    }
    else if (latpos < 1 || (ldotpos - latpos < 2)) {
        msg.textContent = "Check '@' and '.' positions.";
        log_form.lemail.focus();
        blink_fn(err_msg);
    }
    else if (!pattern1.test(lpassword)) {
        msg.textContent = "password contains 6-15 characters.";
        log_form.lpassword.focus();
        blink_fn(err_msg);
    }
    else {
        smsg.textContent = "sucessfully received.";
        err_msg.setAttribute("style", "display:none;");
        sucess_msg.setAttribute("style", "display:block;");
        blink_fn(sucess_msg);
        setInterval(() => {
            sucess_msg.setAttribute("style", "display:none;");
        }, 2500);
        log_form.reset();
    }
});
// bookings js 

const bookings_page = document.querySelector("#bookings_page");
const bookings_button = document.querySelector("#bookings_button");
const not_org = document.querySelector("#not_org");
const not_house = document.querySelector('#not_house');
const organization = document.querySelector("#organization");
const house = document.querySelector("#house");
not_org.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    organization.setAttribute("style", "Display:none;");
    house.setAttribute("style", "Display:block;");
});

not_house.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    house.setAttribute("style", "Display:none;");
    organization.setAttribute("style", "Display:block;");
});
bookings_button.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    bookings_button.setAttribute("style", "border-bottom:2px solid tomato;color:black");
    about_button.setAttribute("style", "border:none;color:grey");
    login_button.setAttribute("style", "border:none;color:grey");
    about_page.setAttribute("style", "Display:none;");
    login_page.setAttribute("style", "Display:none;");
    home_page.setAttribute("style", "Display:none;");
    driver_pic.setAttribute("style", "Display:block;");
    bookings_page.setAttribute("style", "Display:block;");
});


// organization form validation

organization.addEventListener('submit', (e) => {
    e.preventDefault();
    let opincode = organization.opincode.value.trim();
    let oaddress = organization.oaddress.value.trim();
    let ophno = organization.ophno.value.trim();
    let oemail = organization.oemail.value.trim();
    let oname = organization.oname.value.trim();
    atpos = oemail.indexOf("@");
    dotpos = oemail.lastIndexOf(".");
    let phpattern = /^[0-9]{10,10}$/;
    let pinpattern = /^[0-9]{6,6}$/;
    let pattern6 = /[@]/;
    let pattern7 = /[.]/;
    if (oname < 1) {
        msg.textContent = "Organization's name can't be empty.";
        organization.oname.focus();
        blink_fn(err_msg);
    }
    else if (oemail.length < 1) {
        msg.textContent = "Email field can't be empty.";
        organization.oemail.focus();
        blink_fn(err_msg);
    }
    else if (!pattern6.test(oemail)) {
        msg.textContent = "Email field is missing '@'char.";
        organization.oemail.focus();
        blink_fn(err_msg);
    }
    else if (!pattern7.test(oemail)) {
        msg.textContent = "Email field is missing '.'char.";
        organization.oemail.focus();
        blink_fn(err_msg);
    }
    else if (atpos < 1 || (dotpos - atpos < 2)) {
        msg.textContent = "Check '@' and '.' positions.";
        organization.oemail.focus();
        blink_fn(err_msg);
    }
    else if (ophno.search(phpattern)) {
        msg.textContent = "Ph-no entered is invalid.";
        organization.ophno.focus();
        blink_fn(err_msg);
    }
    else if (oaddress.length < 5) {
        msg.textContent = "Fill the address field properly.";
        organization.oaddress.focus();
        blink_fn(err_msg);
    }
    else if (opincode.search(pinpattern)) {
        msg.textContent = "Pin code entered is invalid.";
        organization.opincode.focus();
        blink_fn(err_msg);
    }
    else {
         let now=new Date();
         let details={
            pin:opincode,
            addr:oaddress, 
            phno:ophno, 
            date:firebase.firestore.Timestamp.fromDate(now),
            email:oemail,
            orgname:oname.toLowerCase()
        };
        db.collection('org bookings').add(details).then(()=>
        {
            console.log("added");
        }).catch((err)=>
        {
            console.log(err);
        });

        smsg.textContent = "sucessfully received.";
        err_msg.setAttribute("style", "display:none;");
        sucess_msg.setAttribute("style", "display:block;");
        blink_fn(sucess_msg);
        setInterval(() => {
            sucess_msg.setAttribute("style", "display:none;");
        }, 2500);
        organization.reset();
    }
});


// house form validation

house.addEventListener('submit', (e) => {
    e.preventDefault();
    let hpincode = house.hpincode.value.trim();
    let haddress = house.haddress.value.trim();
    let type_of_trash = house.type_of_trash.value.trim();
    let hphno = house.hphno.value.trim();
    let amount_of_trash = house.amount_of_trash.value.trim();
    let pinpattern = /^[0-9]{6,6}$/;
    let phpattern = /^[0-9]{10,10}$/;
    if (type_of_trash =="") {
        msg.textContent = "select the type of trash you have.";
        house.type_of_trash.focus();
        blink_fn(err_msg);
    }
    else if (amount_of_trash =="") {
        msg.textContent = "Estimate the amount of trash you have.";
        house.amount_of_trash.focus();
        blink_fn(err_msg);
    }
    else if (hphno.search(phpattern)) {
        msg.textContent = "Ph-no entered is invalid.";
        house.hphno.focus();
        blink_fn(err_msg);
    }
    else if (haddress.length < 5) {
        msg.textContent = "Fill the address field properly.";
        house.haddress.focus();
        blink_fn(err_msg);
    }
    else if (hpincode.search(pinpattern)) {
        msg.textContent = "Pin code entered is invalid.";
        house.hpincode.focus();
        blink_fn(err_msg);
    }
    else {
        let now=new Date();
        let details={
            pin:hpincode,
            addr:haddress, 
            tot:type_of_trash, 
            phno:hphno, 
            wot:amount_of_trash,
            date:firebase.firestore.Timestamp.fromDate(now),
        };
        db.collection('home bookings').add(details).then(()=>
        {
            console.log("added");
        }).catch((err)=>
        {
            console.log(err,"2");
        });
        smsg.textContent = "sucessfully received.";
        err_msg.setAttribute("style", "display:none;");
        sucess_msg.setAttribute("style", "display:block;");
        blink_fn(sucess_msg);
        setInterval(() => {
            sucess_msg.setAttribute("style", "display:none;");
        }, 2500);
        house.reset();
    }
});





// about js 

const about_page = document.querySelector("#about_page");
const about_button = document.querySelector("#about_button");
about_button.addEventListener('click', () => {
    err_msg.setAttribute("style", "display:none;");
    sucess_msg.setAttribute("style", "display:none;");
    about_button.setAttribute("style", "border-bottom:2px solid tomato;color:black");
    bookings_button.setAttribute("style", "border:none;color:grey");
    login_button.setAttribute("style", "border:none;color:grey");
    bookings_page.setAttribute("style", "Display:none;");
    login_page.setAttribute("style", "Display:none;");
    home_page.setAttribute("style", "Display:none;");
    driver_pic.setAttribute("style", "Display:block;");
    err_msg.setAttribute("style", "Display:none;");
    about_page.setAttribute("style", "Display:block;");
});








//database

