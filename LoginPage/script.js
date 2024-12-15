var usrnme = document.getElementById('usrnme');
var psd = document.getElementById('psd');
var err1 = document.getElementById('err');


function validateUsername()
{
    const regex = /^admin$/i;

    if(regex.test(usrnme.value))
    {
        return 'ok';    
    }
    else
    {
        return 'notok';

    }
}

function validatePassword()
{
    const regex = /^12345$/

    if(regex.test(psd.value))
    {
        return 'ok';    
    }
    else
    {
        return 'notok'; 
    }
}


function validation(callback1,callback2)
{
    if(callback1() =='ok' && callback2() == 'ok')
    {
        return true;
    }
    else
    {
        err1.innerText = `Username or Password in incorrect`;
        return false;
    }
}


