export default function PortfolioPage() {
    return (
        <div className="container pt-4">
        <p>
          Over the past six months I have had the opportunity to work on many different skills
          from front end development, to back end development and full stack opportunities.  Some of the work I have 
          been able to complete either by myself or with a group is shown below. 
        </p>
        <section className="features-icons bg-light text-center m-4">
          <div className="container">
            <div className="row p-2">
              <div className="col-lg-6">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Zen Garden</h3>
                  <p className="lead mb-0">
                    Feel free to plant a virtual zen garden to relax and destress from your daily life
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Flickity Split</h3>
                  <p className="lead mb-0">
                    This all in one entertainment app is designed to bring the magic and power of Hollywood to your fingertips. 
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>
          Please visit my Resume page to view my past experience as a Product Manager in various roles.  
        </p>
      </div>
    );
  }
  