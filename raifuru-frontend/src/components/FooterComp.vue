<template>
    <div class="footer-top ">
            <div class="container">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>
                                <li>Sunday: 8:00 AM - 12:00 PM</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    

                    <div class="col-md-4">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>Claremont 132 Herchers Cape Town</li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">Raifuru.Art@gmail.com</a></li>
                           
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        
    
</template>

<script>
</script>



<style scoped>


footer {
    color: #fff;
    font-family:  Georgia, "Times New Roman", Times, serif;
}
ul {
    padding: 0px;

}
ol, ul {
    margin-bottom: 0px;
}
.footer-day-time {
    padding-bottom: 30px;
    border-bottom: 2px solid darkkhaki;
    padding-top: 14px;
    margin-bottom: 55px;
}
.footer-day-time ul li {
    display: inline;
    margin-right: 20px;
    font-family:  Georgia, "Times New Roman", Times, serif;
}
.footer-day-time ul li:last-child {
    margin-right: 0px;
}

.footer-top {
    background: lavender;
    padding:50px 0 50px;
    width: 100vw;
    
}
.footer-top> *{
    flex-basis: 100%;
}
.footer-top h4 {
    font-size: 19px;
    text-transform: uppercase;
    margin-bottom: 30px;
    font-family:  Georgia, "Times New Roman", Times, serif;
}
.footer-top p {
    font-size: 13px;
    line-height: 2;
    font-family:  Georgia, "Times New Roman", Times, serif;
}
footer p {
  margin-bottom:0;
  font-family:  Georgia, "Times New Roman", Times, serif;
}
.address1 li {
    list-style: none;
    position: relative;
    padding: 0px 0 14px 34px;
    line-height: 26px;
}
ul.address1 span {
    position: absolute;
    width: 40px;
    max-width: 40px;
    left: 0;
}
.address1 li a {
    color: darkkhaki;
    text-decoration: none;
}
ul.address1 i {
    width: 20px;
    position: absolute;
    left: 0px;
    text-align: center;
    font-size: 28px;
    top: 0;
}
ul.address1 i.fa-envelope {
    font-size: 18px;
    top: 4px;
}
footer ul.social-icon {
    float: left;
}
footer .social-icon li i:hover {
    color:#7a6f6f;
    scale: 1.5;
}

.social-icon a {
    color: burlywood;
    font-size: 20px;
}

.social-icon a:hover 
 {
    color: darkkhaki;
    scale: 1.7;
}

</style>