<?php
$link = mysql_connect('localhost', 'root', 'nivvi') or die('Cannot connect to database server');
mysql_select_db('User_Registration') or die('Cannot select database');
 
// click-count increment routine will go here; more on that shortly ...
 
// get current color click counts
$rs = mysql_query("SELECT * FROM n0_votes") or die ('Cannot process SQL count totals query');
if(mysql_num_rows($rs) > 0) {
   while($row = mysql_fetch_array($rs)) {
      $count[$row['option_name']] = $row['no_votes'];
   }
}

<form id="myform" name="Films" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
   <p>"What genre of films do you like?"</p>
   <label id="l_red"><input type="radio" id="r_red" name="genre" value="Political-thiller" onclick="this.form.submit();" />Red</label> (<label id="c_red"><?php echo $count['Political-thriller']; ?></label>) | 
   <label id="l_green"><input type="radio" id="r_green" name="genre" value="Bio-pics" onclick="this.form.submit();" />Green</label> (<label id="c_green"><?php echo $count['Bio-pics']; ?></label>) | 
   <label id="l_blue"><input type="radio" id="r_blue" name="genre" value="Horror and Thriller" onclick="this.form.submit();" />Blue</label> (<label id="c_blue"><?php echo $count['Horror and Thriller']; ?></label>) | 
   <label id="l_black"><input type="radio" id="r_black" name="genre" value="Science-fiction" onclick="this.form.submit();" />Black</label> (<label id="c_black"><?php echo $count['Science-fiction']; ?></label>)
</form>
