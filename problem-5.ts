{


    function getProperty<O, P extends keyof O> ( obj: O , key: P  )  {
        return obj[key]
    }

    

}