import styles from "../../styles/WeCreate.module.css";
// import Image from "next/image";
// import Img01 from "../../../public/images/icon-plus.png";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Accordion1() {
  return (
    <section className={`${styles.bckcolor}`}>
      <Container className="p-4">
        <Row>
          <Col md="11" className="offset-md-1">
            <h3>WE CREATE BIG THINGS WITH</h3>
          </Col>
          <Col md="6" className="offset-md-5 py-5">
            <Accordion flush defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.accordionItem}>
                  DIGITAL MARKETING
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Implementing high performance digital marketing solutions
                    for a company requires a strategic and comprehensive
                    approach. The first step is to understand the company's
                    target audience and what digital channels they use most
                    frequently. From there, a content marketing strategy can be
                    developed to create valuable and engaging content that will
                    attract and retain the target audience. This strategy can
                    include blog posts, social media content, email marketing,
                    and other forms of digital content. In addition to content
                    marketing, search engine optimization (SEO) and
                    pay-per-click (PPC) advertising should also be considered.
                    SEO is the process of optimizing a website and its content
                    to rank higher in search engine results pages, while PPC
                    advertising allows companies to target specific audiences
                    with paid ads that appear at the top of search engine
                    results pages. Another important component of high
                    performance digital marketing is data analytics. By
                    analyzing data from website traffic, social media
                    engagement, and other digital marketing channels, companies
                    can gain insights into their audience's behavior and
                    preferences, allowing them to optimize their marketing
                    strategies for maximum impact. Finally, a successful digital
                    marketing strategy requires ongoing testing and
                    optimization. This means constantly monitoring and adjusting
                    digital marketing efforts based on data and feedback, in
                    order to continually improve performance and achieve
                    business objectives. We work every part of those steps,
                    personalized to your business segment and communication
                    standards.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={styles.accordionItem}>
                  GROWTH HACKING
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Growth hacking is a marketing strategy that focuses on rapid
                    experimentation across various channels to identify the most
                    effective ways to grow a business. To apply growth hacking
                    to a company, it's important to first define the key
                    performance indicators (KPIs) that will be used to measure
                    success. Then, identify the company's target audience and
                    the channels that they are most likely to engage with.
                    Conduct tests using a variety of tactics, such as email
                    marketing, social media advertising, and website
                    optimization, and analyze the results to determine which
                    tactics are most effective. Once the most effective tactics
                    have been identified, continue to iterate and optimize to
                    drive ongoing growth. Additionally, it's important to foster
                    a culture of experimentation within the company and
                    encourage all team members to contribute ideas for growth.
                    We are specialized in applying this process and making your
                    company reach more clients.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={styles.accordionItem}>
                  SOCIAL MEDIA
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Properly working social media for a company involves
                    developing a strategy that aligns with the company's overall
                    marketing goals and audience targeting. It's important to
                    select the right social media platforms that will be most
                    effective in reaching the desired audience, and to create
                    content that is engaging and relevant to the target
                    audience. This can include a mix of different types of
                    content, such as images, videos, blog posts, and
                    infographics. Consistency is also key in social media
                    management. Regularly posting content, responding to
                    comments and messages, and engaging with followers helps to
                    build trust and loyalty with the audience. It's important to
                    monitor social media metrics such as engagement rates,
                    follower growth, and reach to understand what's working and
                    what's not, and to adjust the social media strategy
                    accordingly. In addition, paid social media advertising can
                    be a valuable tool for expanding reach and targeting
                    specific audiences. A budget should be allocated for social
                    media advertising and carefully managed to ensure the best
                    return on investment. Staying up to date with social media
                    trends and algorithm updates is crucial for success in
                    social media management. Regularly researching and learning
                    about the latest social media developments can help
                    companies stay ahead of the curve and effectively reach
                    their target audience. We take care of all those points so
                    you can watch your company growing in demand with low
                    expenditure and big return over investment.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={styles.accordionItem}>
                  SEO
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Search engine optimization (SEO) is a key factor in
                    increasing the visibility and ranking of a company's website
                    on search engine results pages. To properly work the SEO for
                    a company, it is important to conduct thorough keyword
                    research to identify the most relevant and high-traffic
                    keywords for the business. This involves analyzing the
                    competition, understanding the target audience, and
                    researching industry trends. Once the keywords have been
                    identified, they should be strategically placed in the
                    website's content, meta tags, and other on-page elements.
                    Off-page SEO tactics such as building high-quality backlinks
                    and social media engagement are also important in improving
                    the website's visibility and authority. Regular monitoring
                    and analysis of SEO performance is necessary to make
                    adjustments and continue improving the website's search
                    engine ranking. It is also important to stay up-to-date with
                    the latest SEO best practices and algorithm updates to
                    ensure that the website remains optimized for search
                    engines. We are experts in ranking your channels at a high
                    level, ensuring your company is ahead of its competitors.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header className={styles.accordionItem}>
                  ADSENSE
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    AdSense is a popular advertising program for publishers
                    looking to monetize their website or blog. To work with
                    AdSense, a company should first ensure their website is
                    compliant with AdSense policies and guidelines. This
                    includes having original and high-quality content, a clear
                    website structure, and a user-friendly design. Once
                    approved, the company should optimize their ad placements,
                    targeting, and ad formats to ensure maximum revenue
                    generation. It is also important to regularly analyze ad
                    performance and make necessary adjustments to improve
                    click-through rates and overall revenue. We have a deep
                    understanding of the functionalities and best practices of
                    the platforms, as well as monitoring and optimizing ads to
                    ensure the best results for your company.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Accordion1;
