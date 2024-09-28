const uploadProfilePic = async (url,method,formData) => {
    try{
        const response = await fetch(url,{
            method: method,
            body: formData
        })
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
        throw new Error('There has been some error while uploading picture.')
    }
}

export default uploadProfilePic;