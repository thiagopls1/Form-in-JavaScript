function register_user(name, email, password, gender){
    if (txt_name.value.length == 0 || txt_email.value.length == 0){
        window.alert('[ERRO] Preencha os dados corretamente!')
    } else{
    var tabel = document.querySelector('table#table_user')
    var amtLine = tabel.rows.length
    var line = tabel.insertRow(amtLine)

    var cellID = line.insertCell(0)
    var cellName = line.insertCell(1)
    var cellEmail = line.insertCell(2)
    var cellPassword = line.insertCell(3)
    var cellGender = line.insertCell(4)
    

    var radio_gender = document.getElementsByName('radio_gender')
    if (radio_gender[0].checked){
        gender = "Masc."
    }else if(radio_gender[1].checked){
        gender = "Fem."
    }

    cellID.innerHTML = amtLine
    cellName.innerHTML = name
    cellEmail.innerHTML = email
    cellPassword.innerHTML = password
    cellGender.innerHTML= gender

    cellID.style.width = "70px"
    cellGender.style.width = "70px"

    cellName.style.textAlign = "left"
    cellEmail.style.textAlign = "left"
    cellPassword.style.textAlign = "left"
    }
}


