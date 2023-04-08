import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
/*import CardActions from '@material-ui/core/CardActions';*/
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Grade1 from './Grade1'
import Grade2 from './Grade2'
import Grade3 from './Grade3'
import Grade4 from './Grade4'
import Grade5 from './Grade5'
import Grade6 from './Grade6'
import Grade7 from './Grade7'
import Grade8 from './Grade8'
import Grade9 from './Grade9'
import Grade10 from './Grade10'
import Grade11 from './Grade11'
import Grade12 from './Grade12'
import Grade13 from './Grade13'
import வருடகாலதொழிற்கல்வி from './வருடகாலதொழிற்கல்வி'
import அரசபோட்டிபரீட்சை from './அரசபோட்டிபரீட்சை'
import இணைப்பாடவிதானபாடங்கள் from './இணைப்பாடவிதானபாடங்கள்'
import பல்கலைகழகதுறைசார்பரீட்சை from './பல்கலைகழகதுறைசார்பரீட்சை'
import முன்பள்ளி from './முன்பள்ளி'
import விசேடகல்வி from './விசேடகல்வி'
import உசாத்துணைவளங்கள் from './உசாத்துணைவளங்கள்'


import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: 8,
    padding: 8
  },
  media: {
    height: 200,
  },
});
export default function Grade() {
  const classes = useStyles();

  const [grade, setGrade] = useState("");

  const onChangeSelect = (grad) => {
    setGrade(grad);
    console.log(grad)
  }

  return (

    <div>

{
    grade == "" ? (
    <p>இ-பள்ளிக்கூடம் செயற்திட்டமானது, இலங்கைத் தமிழ் பேசும் சமூகங்களின் கல்வி சார் முயற்சிகளுக்கு உறுதுணையாக அமையும் வண்ணம் முன்னெடுக்கப்பட்டது. பாடசாலைகளிலே மேற்கொள்ளப்படும் கற்றல் கற்பித்தற் செயன்முறைகளுடன் தொடர்பான‌ ஆவணங்களைச் சேகரித்து, ஆவணப்படுத்தி அவற்றை இணையத் தளம் வழியாக பாடசாலை சமூகம் மற்றும் அனைவருக்கும்  பயன்தரும் வகையில் வெளியிடுதல் எமது சமூகங்களின் கல்வி சார் முயற்சிகளுக்கு உறுதுணையாக அமையும். அவ்வகையில் நூலக நிறுவனம் முன்னெடுக்கும் செயற்பாடுகளில் ஆவணப்படுத்தலின் ஓர் பகுதியாக பாடசாலைகளின் கல்வி வளங்கள் சார் ஆவணங்களைப் பெற்று அவற்றை எண்ணிமப்படுத்தி ஆவணப்படுத்தும் செயற்பாடுகள் முன்னெடுக்கப்பட்டன.

பாடசாலைக் கல்வியுடன் தொடர்பான வளங்கள் தற்சமயம் இணைய வடிவில் வெவ்வேறு தளங்களிலே சிதறிக் கிடக்கின்றன. அவற்றினை, அனுமதி பெற்று, நூலகச் சீர்தரங்களுக்கு ஏற்ப ஒழுங்குபடுத்தி விபரித்து ஒரு தளத்துக்குக் கொண்டு வந்து, வகுப்பு ரீதியாகவும், பாட ரீதியாகவும் பகுத்து மாணவர்களின் பாவனைக்காக விடுவது இந்தச் செயற்றிட்டத்தின் ஒரு நோக்கமாகும்.
</p> ) : null

  }

    {
    grade != "" ? (<Button onClick={() => { setGrade("") }} style={{fontSize: 18}}> {`< முன்னே  செல்ல`}</Button>) : null
    }


    { grade == "" ?

  ( <Grid item container style={{padding: 10, justifyContent: 'center'}} xl>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade1")}}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://1.bp.blogspot.com/-b1Y2BrCl6Qo/YLsvK0XuoAI/AAAAAAAACiM/zj30Lv9eRegD5-GkOBtuQVKw4Vt2lWbJgCLcBGAsYHQ/s311/200px.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
<center>தரம் 1</center>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* Grade 1 Subjects Included here */}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/*<CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>*/}
        </Card>
        
    <Card className={classes.root} onClick={() => {onChangeSelect("Grade2")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-YlLzM4HQ0RQ/YLs46SocX_I/AAAAAAAACiY/OmwExpR7pKc5h8ef3b_ZGrhyDYKc2mMhQCLcBGAsYHQ/s311/2.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 2</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 2 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card> 

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade3")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-v7pVQEU8pcI/YLs46XcUOFI/AAAAAAAACic/cPP2DLlSLyw7zWyf32sGmkRLnoUzf5ueQCLcBGAsYHQ/s311/3.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 3</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 3 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade4")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-ZCSNZOntMO8/YLs46SF-T8I/AAAAAAAACiU/s6-jnCRuhS0AZnDJ6oS6kl0BDds8lpueQCLcBGAsYHQ/s311/4.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 4</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 4 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade5")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-DmWJ-nhTDW0/YLs47Mt7jPI/AAAAAAAACig/_q9vsHumRb8_1fJsjG28lCh_mUFrfoHzACLcBGAsYHQ/s311/5.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 5</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 5 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade6")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-k72faZ--2jM/YLs47oAt-DI/AAAAAAAACik/DzFdYIDlwfcvbzODwEgGy4uuKUmYLh2PQCLcBGAsYHQ/s311/6.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 6</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 6 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade7")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-FwKvmYdd1AU/YLs48HiOcjI/AAAAAAAACio/NzmskkrS0mM2QWghxtvVrd_cG2N2JLWnwCLcBGAsYHQ/s311/7.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 7</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 7 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade8")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-_8LKB7Af5IM/YLs6XbkZCwI/AAAAAAAACjQ/GNyrrJUrtuYqa9WiHC8ssfzd9P6D6j8egCLcBGAsYHQ/s311/8.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 8</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 8 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade9")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-Yzsi8fHaVbw/YLs6XdVuAlI/AAAAAAAACjU/dsgtxrYmvoEa37GMFjuOoa7MCVv3D6SBACLcBGAsYHQ/s311/9.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 9</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 9 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade10")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-zRcGSkupj2g/YLs6WpTkUyI/AAAAAAAACjE/kSi37RXaFeYRunZMBXgQlcoChOvzkQpoACLcBGAsYHQ/s311/10.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 10</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 10 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade11")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-BC88uNyQIiA/YLs6WeqMLtI/AAAAAAAACjA/4UDrUlq6Cwgj_GUS6pGblCr8yiKAIhXhwCLcBGAsYHQ/s311/11.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 11</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 11 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade12")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-6oh5NtfstPU/YLs6WrXuv4I/AAAAAAAACjI/-F6iRf-PyX8qBWlITuDiaNX0LGyeWyPZQCLcBGAsYHQ/s311/12.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 12</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 12 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("Grade13")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-fzNvFOQbhFE/YLs6XNT5RjI/AAAAAAAACjM/O9eP3gO8ldActvxMfE2K0EicWkktzredQCLcBGAsYHQ/s311/13.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>தரம் 13</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Grade 13 Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("முன்பள்ளி")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-xmqYNJ_rvgA/YLs86OgrUqI/AAAAAAAACjw/0rz-TctWuUkANbin_EZn0JLKT58JEnRVwCLcBGAsYHQ/s311/14.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>முன் பள்ளி</center>             
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Preschool Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("விசேடகல்வி")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-H-jUQM5Ru8M/YLtMe0pL-WI/AAAAAAAACkM/adwyS4TmNywZmRbSidB2EnOq_XxFx5JmwCLcBGAsYHQ/s311/Veedu.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>விசேட கல்வி</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Special education Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("வருடகாலதொழிற்கல்வி")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-H-jUQM5Ru8M/YLtMe0pL-WI/AAAAAAAACkM/adwyS4TmNywZmRbSidB2EnOq_XxFx5JmwCLcBGAsYHQ/s311/Veedu.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>13 வருட கால தொழிற்கல்வி</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* 13 years of vocational education Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("அரசபோட்டிபரீட்சை")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-H-jUQM5Ru8M/YLtMe0pL-WI/AAAAAAAACkM/adwyS4TmNywZmRbSidB2EnOq_XxFx5JmwCLcBGAsYHQ/s311/Veedu.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>அரச போட்டிப் பரீட்சைகள்</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
       {/* State Competitive Exam Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("இணைப்பாடவிதானபாடங்கள்")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-H-jUQM5Ru8M/YLtMe0pL-WI/AAAAAAAACkM/adwyS4TmNywZmRbSidB2EnOq_XxFx5JmwCLcBGAsYHQ/s311/Veedu.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>இணைப்பாட விதான பாடங்கள்</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Coordinating lesson Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>
   
    <Card className={classes.root} onClick={() => {onChangeSelect("பல்கலைகழகதுறைசார்பரீட்சை")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-oNpwMgtjiBM/YLtMe7xn05I/AAAAAAAACkE/jDERLGBX-LgmNUvoq7Ig1XfHQTwkSK98wCLcBGAsYHQ/s311/Lady.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>பல்கலை கழக துறைசார் பரீட்சைகள்</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* University Departmental Exam Subjects Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

    <Card className={classes.root} onClick={() => {onChangeSelect("உசாத்துணைவளங்கள்")}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://1.bp.blogspot.com/-8IVDw4F4eqs/YLtMe4NHcUI/AAAAAAAACkI/1luHV-vvxBIgyMT1hwaTvCfquxzbVN9bwCLcBGAsYHQ/s311/Micro.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            <center>உசாத்துணை வளங்கள்</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {/* Reference Included here */}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>

  </Grid> ) : grade == 'Grade1' ? (<Grade1/>) : grade == 'Grade2' ? (<Grade2/>) : grade == 'Grade3' ? (<Grade3/>) : grade == 'Grade4' ? (<Grade4/>) : grade == 'Grade5' ? (<Grade5/>) : grade == 'Grade6' ? (<Grade6/>) : grade == 'Grade7' ? (<Grade7/>) : grade == 'Grade8' ? (<Grade8/>) : grade == 'Grade9' ? (<Grade9/>) : grade == 'Grade10' ? (<Grade10/>) : grade == 'Grade11' ? (<Grade11/>) : grade == 'Grade12' ? (<Grade12/>) : grade == 'Grade13' ? (<Grade13/>) : grade == 'முன்பள்ளி' ? (<முன்பள்ளி/>) : grade == 'வருடகாலதொழிற்கல்வி' ? (<வருடகாலதொழிற்கல்வி/>) : grade == 'விசேடகல்வி' ? (<விசேடகல்வி/>) : grade == 'அரசபோட்டிபரீட்சை' ? (<அரசபோட்டிபரீட்சை/>) : grade == 'பல்கலைகழகதுறைசார்பரீட்சை' ? (<பல்கலைகழகதுறைசார்பரீட்சை/>) : grade == 'இணைப்பாடவிதானபாடங்கள்' ? (<இணைப்பாடவிதானபாடங்கள்/>) : grade == 'உசாத்துணைவளங்கள்' ? (<உசாத்துணைவளங்கள்/>) : null

    }

    {
      grade == "" ? (

        <div>

        <h2>அனுசரணையாளர்கள்:</h2>

<Grid item container style={{padding: 10, justifyContent: 'center'}} xl>

            <Card className={classes.root}>
              <div>
                <div> <a href="">
                <img src="https://1.bp.blogspot.com/-YEPoe5OMiG8/YLtajK9JlUI/AAAAAAAACkw/KIG_Xirvox0GphO3OK-rJiDNwNJmbBbCgCLcBGAsYHQ/s200/Round.jpg"/></a>
                </div>
              </div>
            </Card>

            <Card className={classes.root}>
              <div >
                <div> <a href="http://careforedu.org/">
                <img src="https://1.bp.blogspot.com/-6407VwXwLR4/YLpNgmruwwI/AAAAAAAAChY/M1_gKbfDEu8PlTjaKK4l3MiWms685vH7ACLcBGAsYHQ/s200/Small%2BSize2.jpg"/></a>                  
                </div>
              </div>
            </Card>

            <Card className={classes.root}>
              <div>
                <div> <a href="https://www.ekalvi.org/">
                <img src="https://1.bp.blogspot.com/-il1dQ0US-C4/YLpNhMUAcsI/AAAAAAAAChc/4i8wmrt1KiUUT4_fCSniKgKfHno_ZpolwCLcBGAsYHQ/s200/Small%2BSize4.jpg"/></a>                         
              </div>
            </div>
            </Card>

            <Card className={classes.root}>
              <div>
                <div> <a href="http://www.sirakukal.org/">
                <img src="https://1.bp.blogspot.com/-2uDJkkcCgkw/YQJAgkv320I/AAAAAAAACoo/yub3njBziw8pQMa9PShzjkvJFe09ax6xwCLcBGAsYHQ/s0/Small%2BSmall%2B2.jpg"/></a> 
              </div>
            </div>

            </Card>

</Grid>
</div>

  ) : 
  null }

    </div>

  );
}
