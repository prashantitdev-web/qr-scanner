/* Reset */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

/* Body */

body{

    background:#eef2f7;

    display:flex;

    justify-content:center;

    align-items:center;

    min-height:100vh;

    padding:20px;

}

/* Main */

.main{

    width:100%;

    display:flex;

    justify-content:center;

}

/* App */

.app{

    width:100%;

    max-width:420px;

    background:white;

    border-radius:20px;

    padding:25px;

    box-shadow:0 15px 40px rgba(0,0,0,.15);

}

/* Header */

.header{

    text-align:center;

    margin-bottom:25px;

}

.header h1{

    color:#2563eb;

    font-size:30px;

}

.header p{

    color:#666;

    margin-top:5px;

}

/* Card */

.card{

    background:#f8fafc;

    border-radius:15px;

    padding:18px;

    margin-bottom:20px;

    border:1px solid #dbeafe;

}

/* Title */

.card-title{

    font-weight:bold;

    color:#1f2937;

    margin-bottom:10px;

}

/* QR Box */

.qr-box{

    height:70px;

    background:white;

    border:2px dashed #2563eb;

    border-radius:10px;

    display:flex;

    justify-content:center;

    align-items:center;

    color:#666;

    margin-bottom:15px;

    word-break:break-word;

    padding:10px;

}

/* Scan Button */

.scan-btn{

    width:100%;

    padding:14px;

    border:none;

    border-radius:10px;

    background:#2563eb;

    color:white;

    font-size:16px;

    cursor:pointer;

}

.scan-btn:hover{

    background:#1d4ed8;

}

 

/* Submit */

.submit-btn{

    width:100%;

    padding:16px;

    border:none;

    border-radius:12px;

    background:#16a34a;

    color:white;

    font-size:18px;

    font-weight:bold;

    cursor:pointer;

}

/* Popup */

#popup{

    position:fixed;

    inset:0;

    display:none;

    justify-content:center;

    align-items:center;

    background:rgba(0,0,0,.6);

}

#popupText{

    background:white;

    padding:40px;

    border-radius:20px;

    font-size:30px;

    font-weight:bold;

}
/* Scanner Popup */

.scanner-modal{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    height:100%;

    display:none;

    justify-content:center;

    align-items:center;

    background:rgba(0,0,0,.8);

    z-index:9999;

}

.scanner-content{

    width:95%;

    max-width:450px;

    background:#fff;

    border-radius:15px;

    padding:20px;

    position:relative;

    text-align:center;

}

.close-btn{

    position:absolute;

    right:10px;

    top:10px;

    width:35px;

    height:35px;

    border:none;

    border-radius:50%;

    background:red;

    color:white;

    font-size:18px;

    cursor:pointer;

}

.scanner-content #reader{

    width:100%;

    border-radius:10px;

    overflow:hidden;

}
