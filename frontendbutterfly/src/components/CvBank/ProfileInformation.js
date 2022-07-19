import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ProfileInformation = (props) => {
  const [preferenceData, setPreferenceData] = useState([])

  const [profileInformation, setProfileInformation] = useState({
    image: '',
    name: '',
    gender: '',
    phone: '',
    religion: '',
    email: '',
    presentAddress: '',
    divisionPresent: '',
    dristrictPresent: '',
    parmanentAddress: '',
    divisionParmanent: '',
    dristrictParmanent: '',
    age: '',
    specialCase: '',
    spousePreference: '',
    about: '',
  })

  var loadFile = function (event) {
    document.querySelector('.uploadImg').style.backgroundImage =
      'url(' + URL.createObjectURL(event.target.files[0]) + ')'
  }

  const checkSingle = (event, name) => {
    if (event) {
      let prefData = [...preferenceData, name]
      setPreferenceData(prefData)
    } else {
      preferenceData.forEach((item, index) => {
        if (item === name) {
          preferenceData.splice(index, 1)
          console.log(preferenceData)
          setPreferenceData(preferenceData)
        }
      })
    }
  }

  const { updateProfileData, updatePreferenceData } = props

  useEffect(() => {
    updateProfileData(profileInformation)
    updatePreferenceData(preferenceData)
  }, [
    profileInformation,
    updateProfileData,
    preferenceData,
    updatePreferenceData,
  ])

  return (
    <>
      <Container className="cv_bank_container21">
        <Row className="row-padding">
          <Col xs={12} md={2} className="img_uploader">
            <input
              type="file"
              accept="image/*"
              title="Choose Image"
              className="uploadImg"
              onChange={(event) => {
                setProfileInformation({
                  ...profileInformation,
                  image: event.target.files[0],
                })
                loadFile(event)
              }}
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h4>Name:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  name: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="Male"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      gender: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="Female"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      gender: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="inlineRadio2">
                  Female
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h4>Phone:</h4>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  phone: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h4>Religion:</h4>
            <select
              class="form-control"
              placeholder="Choose One"
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  religion: event.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Choose One
              </option>
              <option value="Muslim">Muslim</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h4>Email:</h4>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email id."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  email: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h4>Date Of Birth:</h4>
            <input
              type="date"
              data-date-format="mm/dd/yyyy"
              title="mm/dd/yyyy"
              className="form-control"
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  age: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h4>Present Address:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your present address."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  presentAddress: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h4>Division:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your division."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  divisionPresent: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h4>Dristrict:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your dristrict."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  dristrictPresent: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col>
            <h4>Parmanent Address:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your present address."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  parmanentAddress: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={6}>
            <h4>Division:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your division."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  divisionParmanent: event.target.value,
                })
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <h4>Dristrict:</h4>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your dristrict."
              onChange={(event) =>
                setProfileInformation({
                  ...profileInformation,
                  dristrictParmanent: event.target.value,
                })
              }
            />
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h4>Limitations Or Special Case:</h4>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value="Addiction"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios1">
                  Addiction
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value="Diabetics"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  Diabetics
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value="Smoker"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  Smoker
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  value="Other"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      specialCase: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  Other
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h4>Preference:</h4>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Single"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Single</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Divorce"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Divorce without child"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce without child</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="Divorce with child"
                onChange={(event) =>
                  checkSingle(event.target.checked, event.target.value)
                }
              />
              <label class="form-check-label">Divorce with child</label>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h4>Spouse Preference:</h4>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="redioJob"
                  value="Job"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios1">
                  Job
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="redioJob"
                  value="No Job"
                  onChange={(event) =>
                    setProfileInformation({
                      ...profileInformation,
                      spousePreference: event.target.value,
                    })
                  }
                />
                <label class="form-check-label" for="exampleRadios2">
                  No Job
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-padding">
          <Col xs={12} md={12}>
            <h4>About:</h4>
            <div class="input-group">
              <textarea
                class="form-control"
                placeholder="Write about yourself."
                aria-label="With textarea"
                rows="7"
                onChange={(event) =>
                  setProfileInformation({
                    ...profileInformation,
                    about: event.target.value,
                  })
                }
              ></textarea>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProfileInformation
