export const TitleRender = (str: string) => {

    const words  = str.split(" ")
  
    const result = words.findIndex(word => word === "vs" || word === "v")
    
    const title = [
      words[result - 2],
      words[result - 1],
      "vs",
      words[result + 1],
      words[result + 2]
    ].join(" ")
  
    return title
  }