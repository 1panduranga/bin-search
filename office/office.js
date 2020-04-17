const org=document.querySelector(".org");
const home=document.querySelector(".home");

db.collection('home bookings').orderBy('date').onSnapshot(snapshot=>
    {
       let changes=snapshot.docChanges();
       changes.forEach(change => {
           if(change.type=="added")
           {
            addochome(change.doc);
            // console.log(change.doc.data(),"home");
            console.log(change.type)
           }  
           else{console.log(change.type)}  
            });
      
    });

    db.collection('org bookings').orderBy('orgname').onSnapshot(snapshot=>
        {
            let changes=snapshot.docChanges();
           changes.forEach(change => {
               if(change.type=="added")
               {
                addocorg(change.doc);
                console.log(change.type)
                // console.log(change.doc.data(),"org");
               }
               else{console.log(change.type)} 
               
                });
        });

function addocorg(doc)
{
   let li=document.createElement('li');
   let labove=document.createElement('div');
   let lbelow=document.createElement('div');
   let name=document.createElement('h5');
   let email=document.createElement('span');
   let addr=document.createElement('span');
   let phno=document.createElement('span');
   let pin=document.createElement('span');
   let date=document.createElement('span');
   let del=document.createElement('img');
   
   del.setAttribute("src","del.png")
   labove.appendChild(del)
   del.setAttribute('class',"lhead")
   del.setAttribute('id',"del")
   name.textContent=doc.data().orgname;
   email.setAttribute('class','lbele')
   phno.setAttribute('class','lbele')
   addr.setAttribute('class','lbele')
   pin.setAttribute('class','lbele')
   email.textContent="e-mail :"+doc.data().email;
   addr.textContent="Address :"+doc.data().addr;
   phno.textContent="Ph-no :"+doc.data().phno;
   pin.textContent="Pin-code :"+doc.data().pin;
   
   let dstr=String(doc.data().date.toDate())
   date.textContent=dstr.slice(0,dstr.indexOf(':')-3);
   name.setAttribute("class","lhead");
   date.setAttribute("class","date");
   labove.appendChild(name);
   lbelow.appendChild(email);
   lbelow.appendChild(addr);
   lbelow.appendChild(phno);
   lbelow.appendChild(pin);
   labove.appendChild(date);
   li.setAttribute('id',doc.id);
   labove.setAttribute('class','labove');
   lbelow.setAttribute('class','lbelow');
   li.appendChild(labove);
   li.appendChild(lbelow);
   org.appendChild(li);
     
}

function addochome(doc)
{
   let li=document.createElement('li');
   let tot=document.createElement('h5');
   let wot=document.createElement('span');
   let addr=document.createElement('span');
   let phno=document.createElement('span');
   let pin=document.createElement('span');
   let date=document.createElement('span');
   let labove=document.createElement('div');
   let lbelow=document.createElement('div');
   let del=document.createElement('img');
   
   del.setAttribute("src","del.png")
   labove.appendChild(del)
   del.setAttribute('class',"lhead")
   del.setAttribute('id',"del")
   tot.textContent=doc.data().tot;
   wot.textContent=doc.data().wot;
   addr.textContent=doc.data().addr;
   phno.textContent=doc.data().phno;
   pin.textContent=doc.data().pin;
   let dstr=String(doc.data().date.toDate())
   date.textContent=dstr.slice(0,dstr.indexOf(':')-3);
   labove.appendChild(tot);
   lbelow.appendChild(wot);
   lbelow.appendChild(addr);
   lbelow.appendChild(phno);
   lbelow.appendChild(pin);
   labove.appendChild(date);
   tot.setAttribute("class","lhead");
   date.setAttribute("class","date");
   wot.setAttribute('class','lbele')
   pin.setAttribute('class','lbele')
   addr.setAttribute('class','lbele')
   phno.setAttribute('class','lbele')
   li.appendChild(labove)
   li.appendChild(lbelow);
   labove.setAttribute('class','labove');
   lbelow.setAttribute('class','lbelow');
   li.setAttribute('id',doc.id);
   home.appendChild(li);
     
}


//toggle

const h_w=document.querySelector('.home_wrapper');
h_w.addEventListener('click',(e)=>{
    if(e.target.id=='del')
    {
        db.collection('home bookings').doc(e.target.parentElement.parentElement.id).delete();
        document.querySelector('#'+e.target.parentElement.parentElement.id).remove();
    }
    else if(e.target.getAttribute('class')=='lhead' || e.target.getAttribute('class')=='date')
    {
        e.target.parentElement.nextElementSibling.classList.toggle('open')
    }
})
const o_w=document.querySelector('.org_wrapper');
o_w.addEventListener('click',(e)=>{
    if(e.target.id=='del')
    {
        db.collection('org bookings').doc(e.target.parentElement.parentElement.id).delete();
        document.querySelector('#'+e.target.parentElement.parentElement.id).remove();
    }
    else if(e.target.getAttribute('class')=='lhead' || e.target.getAttribute('class')=='date')
    {
        e.target.parentElement.nextElementSibling.classList.toggle('open')
    }
})