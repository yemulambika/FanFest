import "./About.css";
import { Row, Col, Card } from "antd";
import {
  TeamOutlined,
  GlobalOutlined,
  TrophyOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: <TeamOutlined />,
    title: "Meet Creators",
    description:
      "Connect with top creators, influencers and digital personalities from around the world.",
  },
  {
    icon: <GlobalOutlined />,
    title: "Global Community",
    description:
      "Build relationships with international brands, agencies and content creators.",
  },
  {
    icon: <RocketOutlined />,
    title: "Career Growth",
    description:
      "Discover collaborations, sponsorships and exciting opportunities.",
  },
  {
    icon: <TrophyOutlined />,
    title: "Exclusive Experience",
    description:
      "Participate in workshops, networking events and creator challenges.",
  },
];

function About() {
  return (
    <section className="about-section">

      <div className="container">

        <Row gutter={[60, 60]} align="middle">

          <Col xs={24} lg={10}>

            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="about-tag">
                ABOUT FANFEST
              </p>

              <h2 className="about-title">
                WHERE
                <br />
                CREATORS
                <br />
                MEET
                <br />
                THEIR FANS
              </h2>

              <p className="about-description">
                FanFest 2026 is India's biggest creator festival bringing
                together content creators, influencers, brands, gamers,
                artists and thousands of passionate fans under one roof.
              </p>

            </motion.div>

          </Col>

          <Col xs={24} lg={14}>

            <Row gutter={[24, 24]}>

              {features.map((item, index) => (

                <Col xs={24} md={12} key={index}>

                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.8,
                    }}
                    viewport={{ once: true }}
                  >

                    <Card className="feature-card">

                      <div className="feature-icon">
                        {item.icon}
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                    </Card>

                  </motion.div>

                </Col>

              ))}

            </Row>

          </Col>

        </Row>

      </div>

    </section>
  );
}

export default About;