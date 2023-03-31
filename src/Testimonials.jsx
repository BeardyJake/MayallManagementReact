import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import FormatQuoteIcon from "@material-ui/icons/FormatQuoteRounded";

const useStyles = makeStyles((theme) => ({
  testimonials: {
    padding: "50px 0 100px 0",
    backgroundColor: "#66B9BF",
  },
  testCard: {
    margin: "0 200px",
    padding: "0 50px",
    [theme.breakpoints.down("md")]: {
      margin: "0",
      padding: "0",
    },
  },
  sectionHeader: {
    transition: "all .4s ease-out 0s",
    padding: "30px 0 50px 0",
    fontWeight: "450",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4vh",
    },
  },
}));

const Testimonials = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.testimonials} id="testimonials">
      <Container maxWidth="lg">
        <Typography
          className={classes.sectionHeader}
          variant="h2"
          align="center"
        >
          What People Say About Us
        </Typography>
        <Carousel
          interval="8000"
          navButtonsProps={{
            style: {
              opacity: "0.3",
            },
          }}
          navButtonsWrapperProps={{
            style: {
              top: "35%",
              bottom: "unset",
            },
          }}
        >
          <Card className={classes.testCard}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" align="center">
                Sue Clifford FInstLM - Chief Executive at No Offence! CIC
              </Typography>
              <FormatQuoteIcon fontSize="large" />
              <Typography className={classes.cardText} align="center">
                Bernie recognises what is important to make a difference and
                quietly goes about making that happen. She is extraordinarily
                knowledgeable and insightful and her expertise and dedication
                make sure that she achieves her goal, for which we are very
                grateful. Bernie is a wonderful person and an important member
                of our Advisory Board.
              </Typography>
              <Grid container direction="column" alignItems="flex-end">
                <FormatQuoteIcon fontSize="large" />
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.testCard}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" align="center">
                Robert McCrea BA Hons MIOD - Change Management Consultant and
                Interim CEO
              </Typography>
              <FormatQuoteIcon fontSize="large" />
              <Typography className={classes.cardText} align="center">
                I have really enjoyed working with Bernie. Her diplomatic skill,
                ability to get to the root of the issues and work with us to
                come up with creative solutions is excellent. A very cool head
                at dealing with complex issues and a strong ability to support
                others in their development has made Bernie a tremendous asset
                to our partnership work.
              </Typography>
              <Grid container direction="column" alignItems="flex-end">
                <FormatQuoteIcon fontSize="large" />
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.testCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" align="center">
                Bill Puddicombe - Consultant and Interim Executive
              </Typography>
              <FormatQuoteIcon fontSize="large" />
              <Typography className={classes.cardText} align="center">
                It isn't often that one gets to work with someone who actually
                carries out the tasks they say they are going to carry out, when
                promised. Consequently it was a joy to work with Bernie - who
                not only delivers but does so with exceptional good humour and a
                great way with people...not to mention a supply of good coffee.{" "}
                <br /> <br />I would recommend Bernie to manage and complete
                complex projects in difficult environments.
              </Typography>
              <Grid container direction="column" alignItems="flex-end">
                <FormatQuoteIcon fontSize="large" />
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.testCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" align="center">
                Paul Curd (managed Bernie directly) - Chair at Carers’ Support
                East Kent
              </Typography>
              <FormatQuoteIcon fontSize="large" />
              <Typography className={classes.cardText} align="center">
                I worked with Bernie for 18 months when was Chief Executive of
                an organisation that I subsequently Chaired. To be honest, it
                was Bernie's drive and commitment to the 'cause' that persuaded
                me to take on the role of Chair. Under her leadership the
                organisation was turned around, with her calm, unflustered and
                congenial approach improving staff morale and raising quality
                standards. She is especially good at building strategic
                partnerships and collaborative working relationships, and it was
                always a pleasure working with her
              </Typography>
              <Grid container direction="column" alignItems="flex-end">
                <FormatQuoteIcon fontSize="large" />
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.testCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" align="center">
                Adam Colthorpe (reported directly to Bernie) - Director at South
                Kent Mind, Nest + Grow CIC, & Sailfin Ltd.
              </Typography>
              <FormatQuoteIcon fontSize="large" />
              <Typography className={classes.cardText} align="center">
                Under Bernie's leadership, South Kent Mind turned a corner;
                developing a greater profile, beneficial partnerships, and
                expanding our network of contacts and supporters beyond anything
                managed previously. I learned more about leadership, support,
                and encouragement through working with Bernie than I had from
                any study or previous employment. Bernie is a highly competent,
                strong leader who works collaboratively and brings the best out
                of any team.
              </Typography>
              <Grid container direction="column" alignItems="flex-end">
                <FormatQuoteIcon fontSize="large" />
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.testCard}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" align="center">
                Stevie Rice, CEO West Kent Mind
              </Typography>
              <FormatQuoteIcon fontSize="large" />
              <Typography className={classes.cardText} align="center">
                Bernie creates the environment for the people she works
                alongside to flourish. Her quiet leadership capabilities enable
                others to thrive, find their space and their own talents. I had
                the pleasure of working alongside Bernie when she was CEO of
                South Kent Mind. As the CEO of West Kent Mind, her immense
                support, wisdom, strategic insight and friendship were deeply
                appreciated in my early days. She is extremely intuitive, able
                to spot fantastic opportunities and sniff out the rotten ones!
                She is a woman for whom I have great respect, having positioned
                herself as a great leader, creative, supporter, visionary and
                collaborator. In short, an awesome woman!!
              </Typography>
              <Grid container direction="column" alignItems="flex-end">
                <FormatQuoteIcon fontSize="large" />
              </Grid>
            </CardContent>
          </Card>
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
