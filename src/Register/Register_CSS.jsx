import styled from "styled-components";
export const S_wrapRegister = styled.div`
      width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgb(192, 183, 183);
    
    .Register{
    margin: auto;
    width: 400px;
    padding: 50px 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    input{
    outline: none;
    border: none;
    border-bottom: 2px solid #888;
    font-size: 15px;
    padding: 5px;
    background-color: #fff;


}
    .Register_input{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    color: #666;
    margin-bottom: 25px;
}


.button_Register {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 90px;
    margin-top: 40px;
    button{

        padding: 8px 18px;
        color: #fff;
        border: none;
        background: #c83c85;
        border-radius: 6px;
        cursor: pointer;
    }
    a{
    cursor: pointer;
    height: 38px;
    line-height: 38px;
    color: #fff;
    background: #c83c85;
    padding: 0 8px;
    border-radius: 5px;
    text-decoration: none;

}
}


}




    
`

