export const getData = async () => {
    const data = await fetch('albums.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
    })
    return data
}



