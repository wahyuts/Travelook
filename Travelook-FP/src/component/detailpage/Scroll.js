import React from 'react';

const Scroll = (props) => {  //* props ini parameter const scroll,..yang mengacu pada property komponen scroll nantinya di app.js
                            // tapi karena komponen Scroll ini mempunyai penutup jadinya props ini akan mengacu kepada anaknya yaitu semua yang berada didalam <Scrool> (ini anaknya) </Scrool>
                            // penjelasan soal property atau props lebih lengkap dibawah ada
    return (
        <div style = {{ overflow: 'scroll', border: '1px solid black', overflowX: "hidden"}}>  {/**penulisan css pada jsx secara inline yaitu style {{}} */}
            {props.children}  {/* children ini maksudnya adalah komponen yang berada didalam komponen,...lebih lengkapnya dibawah ada penjelasannya */}
        </div>
    )

}

export default Scroll