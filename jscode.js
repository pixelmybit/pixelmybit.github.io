function validateForm()
{
    var usrNameBox = document.getElementById("userName");
    var usrMobileBox = document.getElementById("userMobile");
    var usrEmailBox = document.getElementById("userEmail");
    var usrSiteMgrBox = document.getElementById("siteMgr");
    var usrSiteNumBox = document.getElementById("siteNr");
    var radioBox = document.getElementById("r1").checked;
    var textAreaBox = document.getElementById("textArea").value;
    
    if (usrNameBox.value.length < 5)
    {
        alert( "Please provide your first and last name!");
        usrNameBox.focus();
        usrNameBox.style.border = "solid 3px dodgerblue";
        return false;
    }
    if (usrMobileBox.value.length < 10)
    {
        alert( "Please provide a valid number!");
        return false;
    }  
    
    
   if (radioBox = true) 
   {
        textAreaBox = "https://www.ikea.com/se/sv/?ikeakokpopup";
   }

   alert( "SUCCESS!");
}

function check()
{
   var radioBox = document.getElementById("r1");
   var textAreaBox = document.getElementById("textArea"); 

if (radioBox.checked) 
   {
        textAreaBox.value = "https://www.ikea.com/se/sv/?ikeakokpopup";
   }
else
{
  textAreaBox.value = "";
}
}
   

/*Highlight the field left blank*/
/*Validate URL*/
/*ValidURL*/
/*GlobalEmail - send request to*/
/*Add Country code prefix*/

