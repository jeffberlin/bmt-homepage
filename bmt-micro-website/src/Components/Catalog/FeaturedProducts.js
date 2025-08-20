import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function FeaturedProducts() {
  const productImage = {
    marginRight: '1rem',
    marginBottom: '1rem',
    width: 170
  }

  const colBorder = {
    borderBottom: '1px solid #d9d9d9',
    marginBottom: '1rem'
  }

  return (
    <Row className="justify-content-center">
      <Col xl={10} lg={10} md={12} sm={12} style={colBorder}>
        <h5 className="featured-product-title">Starsector</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-starsector-1-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-starsector-2-min.jpg"
          style={{ marginBottom: '1rem', width: 170 }}
        />
        <p>Starsector is an in-development open-world single-player space-combat, roleplaying, exploration, and economic game. You take the role of a space captain seeking fortune and glory however you choose.</p>
        <p className="text-center"><a href="https://fractalsoftworks.com/" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12} style={colBorder}>
        <h5 className="featured-product-title">SolSuite</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-solsuite-dial-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-solsuite-pyramid-min.jpg"
          style={{ marginBottom: '1rem', width: 170 }}
        />
        <p>SolSuite is a high-quality collection of 706 solitaire games. All of the world's best-known solitaire games are here, including Spider solitaire, Klondike, FreeCell, Pyramid, Golf, Yukon, and much more! We've also invented dozens of solitaires with your fun in mind, such as King of Scotland, Foxtrot, Mayflower and many others! You can also choose your card faces, backs, and skins to customize your playing area! SolSuite: it's addictively fun!</p>
        <p className="text-center"><a href="https://www.solsuite.com" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12} style={colBorder}>
        <h5 className="featured-product-title">Midnight Synergy Games</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-midnight-synergy-dvd-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-midnight-synergy-min.jpg"
          style={{ marginBottom: '1rem', width: 170 }}
        />
        <p>Introducing the Midnight Synergy Games Collection (Ultimate Edition) on DVD-Rom: ten full games, huge level archives, and tons of bonus material. It is a perfect way to pick up our entire games collection at a bargain price or give them as a present to friends and family.</p>
        <p className="text-center"><a href="http://midnightsynergy.com/index.html" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12} style={colBorder}>
        <h5 className="featured-product-title">FeelThere</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-feelthere-1-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-feelthere-2-min.jpg"
          style={{ marginBottom: '1rem', width: 170 }}
        />
        <p>FeelThere is an award-winning simulator developer and publishing company established in 2002. Take control of your favorite airports with these simulators!</p>
        <p className="text-center"><a href="https://www.feelthere.com/" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12} style={colBorder}>
        <h5 className="featured-product-title">Democracy 3</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-democracy3-1-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-democracy3-2-min.jpg"
          style={{ marginBottom: '1rem', width: 170 }}
        />
        <p>Have you ever wanted to be president? or prime-minister? Convinced you could do a better job of running the country? Let's face it, you could hardly do a worse job than our current political leaders. Crime, Unemployment, National Debt, Terrorism, Climate Change...Have you got the answers to the problems that face western industrialized nations? Here is your chance to find out...</p>
        <p className="text-center"><a href="http://positech.co.uk/democracy3/" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12} style={colBorder}>
        <h5 className="featured-product-title">PMView Pro 3.81</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-pmview-1-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-pmview-2-min.jpg"
          style={{ marginBottom: '1rem', maxWidth: 170, height: 120 }}
        />
        <p>PMView Pro is a robust and configurable image viewing and conversion tool for bitmapped graphics. It loads your images blazingly fast, without compromising quality or robustness. PMView Pro supports a variety of file formats, including JPEG, GIF, PNG, TIFF, and PhotoCD. PMView Pro offers broader and faster support for these file formats than many other programs do. PMView Pro also incorporates various image recovery techniques. If the image is bad, PMView Pro will try to do the best of the situation and show the image if only possible. It does not give up easily.</p>
        <p className="text-center"><a href="http://www.pmview.com/" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12}>
        <h5 className="featured-product-title">Project Dogwaffle</h5>
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-project-dogwaffle-1-min.jpg"
          style={productImage}
        />
        <Image
          className="featured-product-image"
          src="https://www.bmtmicro.com/images/bmt-micro-project-dogwaffle-2-min.jpg"
          style={{ marginBottom: '1rem', width: 170 }}
        />
        <p>Project Dogwaffle includes PD Artist, PD Particles, and the top-of-the-line PD Howler. Dogwaffle is a Paint Program with various enhancement and conversion filters, special effects and color adjustments, the primary reason for Dogwaffle is for you to paint - without the mess.</p>
        <p className="text-center"><a href="https://www.thebest3d.com/index.html" target="_blank" rel="noreferrer" className="catalog-link">Visit Website</a></p>
      </Col>
    </Row>
  );
}

export default FeaturedProducts;
