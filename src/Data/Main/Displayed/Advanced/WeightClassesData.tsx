interface WeightClassProps {
    name: string
    weight: string | number
    natural_weight: string
 }
 
 export const WeightClassesData = [
    {
       name: 'Atom',
       weight: 105,
       natural_weight: "115 - 120",
    },
    {
       name: 'Straw',
       weight: 115,
       natural_weight: "120 - 135",
    },
    {
       name: 'Fly',
       weight: 125,
       natural_weight: "135 - 150",
    },
    {
       name: 'Bantam',
       weight: 135,
       natural_weight: "150 - 160",
    },
    {
       name: 'Feather',
       weight: 145,
       natural_weight: "160 - 170",
    },
    {
       name: 'Light',
       weight: 155,
       natural_weight: "170 - 185",
    },
    {
       name: 'Welter',
       weight: 170,
       natural_weight: "185 - 200",
    },
    {
       name: 'Middle',
       weight: 185,
       natural_weight: "200 - 215",
    },
    {
       name: 'Light Heavy',
       weight: 205,
       natural_weight: "215 - 235",
    },
    {
       name: 'Heavy',
       weight: 265,
       natural_weight: "235 - 250",
    }
 ]
 
 WeightClassesData.map((weight_class: WeightClassProps) => {
    
    const { name,  natural_weight, weight } = weight_class
 
    weight_class.name = `${name}weight`
    weight_class.weight = `${weight}lbs`
    weight_class.natural_weight = `${natural_weight}lbs`
 
    return weight_class
    
 })
 
 
 export const WeightCutProConsData = [
    {
        point: "The more likely you are to have a strength advantage over your oponnent in the grappling exchanges.",
        type: "pro"
    },
    {
        point: "The more knockout power you'll have in your punches and kicks.",
        type: "pro"
    },
    {
        point: "The more it builds discipline in the lead up to the fight.",
        type: "pro"
    },
    {
        point: "The more likely you are to have size advantage rather than a disadvantage over your oponnent.",
        type: "pro"
    },
    {
        point: "Diminish your cardio and you are more likely to gas out during the fight.",
        type: "con"
    },
    {
        point: "Mean there is less water in your brain and dehydration means you are far more susceptible to damage during the fight.",
        type: "con"
    },
    {
        point: "Weaken you and you won't perform as effectively as you do at your natural weight in training.",
        type: "con"
    },
    {
        point: "Have long term effects on the health of your kidney.",
        type: "con"
    }
 ]