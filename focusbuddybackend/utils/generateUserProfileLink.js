async function generateUserProfileLink(fname,lname){
    console.log('link',fname,lname);
  
    let random_num = Math.floor(Math.random() * 101);
    if(lname){
        profile_link = `${process.env.CLIENT_PRO_URL}/user/${fname}-${lname}-${random_num}`;
    }else{
        profile_link = `${process.env.CLIENT_PRO_URL}/user/${fname}-${random_num}`;
    }
    console.log(profile_link);
    return profile_link;
}


module.exports = generateUserProfileLink;