    export const getGif = async ( categoryGifGrid ) => {
        const url  = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoryGifGrid) }&api_key=hr4nPbNGu5f61ZSlmXLCSD35hhuELDtw&limit=12`
         try {
             const respuesta = await fetch(url)
             const { data } = await respuesta.json() 
             const gif = data.map( (img) => {
                 return {
                     id: img.id,
                     title: img.title,
                     url: img.images.downsized_medium.url
                 }
             })
              return gif;
         } catch (error) {
             console.log(error);
         }
     } 