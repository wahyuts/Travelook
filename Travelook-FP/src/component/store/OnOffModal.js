import {useState} from 'react';

const OnOffModal = () => {
    const [successful, setSuccessful] = useState(false);

    const [desti, setDesti] = useState('')

    // const [isSignIn, setIsSignIn] = useState(false);

    // const ClickSignInChangeHeadNav = () => {
    //     setIsSignIn(!isSignIn);
    // }

    const mapStateToProps = state => {   //mapStateToProps Tugasnya untuk bilang kepada kita state yang mana yang kita perlu guanakan agar dikirim ke props
  // INGAT state disini itu adalah initialState yang ada di reducer.js,..jadi silahkan rujuk kesana
    return {
        desti:state.searchDesti.desti   //searchField Pertama adalah nama property yang dihasilkan dari mapSateToProps jadi benernya nama boleh bebas                                  
    }       
}

const mapDispatchToProps = (dispatch) =>  {   // dispatch ini pelatuk yg mentriger event actionnya dijalankan
    return {   //onSearchchange ini nama fungsi buatan,..jadi bebas mo pake nama apa
        handleChange:(event) => dispatch(setDesti(event.target.value))  //setSearhField ini nama action nya dan   (event.target.value)   ini adalah parameter text di setSearchField
    }  
}


    const handleChange = (event) => {
    setDesti(event.target.value);
    };

    const RegisSuccessfullTrue = () => {
        setSuccessful(true);
    }

    const RegisSuccessfullFalse = () => {
        setSuccessful(false);
    }


    return {
        RegisSuccessfullTrue,
        RegisSuccessfullFalse,
        successful,
        desti,
        handleChange
        // isSignIn,
        // ClickSignInChangeHeadNav
    }
}

export default OnOffModal