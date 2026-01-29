import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDownloading: false,
      downloadCount: 0
    };
  }

  handleDownload = () => {
    this.setState({ isDownloading: true });
    
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/app.apk';
      link.download = 'mon-application.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      this.setState(prevState => ({
        isDownloading: false,
        downloadCount: prevState.downloadCount + 1
      }));
      
      console.log('Téléchargement APK réussi');
    }, 1000);
  };

  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    const { isDownloading, downloadCount } = this.state;

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton de téléchargement */}
            <div className="col-md-12 mt-4">
              <button 
                className={`btn ${isDownloading ? 'btn-warning' : 'btn-success'} btn-lg`}
                onClick={this.handleDownload}
                disabled={isDownloading}
                style={{
                  padding: "15px 30px",
                  fontSize: "18px",
                  borderRadius: "25px"
                }}
              >
                {isDownloading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Téléchargement...
                  </>
                ) : (
                  <>
                    📲 TÉLÉCHARGER L'APP
                  </>
                )}
              </button>
              
              {downloadCount > 0 && (
                <p className="mt-2 text-muted">
                  ✅ {downloadCount} téléchargement(s)
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;