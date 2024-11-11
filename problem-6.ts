{

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile ( obj: Profile, updater: Partial<Profile> ) : Profile {
    return {
        ...obj,
        ...updater
    }

}



}