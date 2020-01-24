import React from "react";

export default function AddvoterForm(props) {
  const alert = (
    <section className="content-header">
      <div className="alert alert-success">
        <strong>Success!</strong> Voter has been added
      </div>
    </section>
  );

  const error = (
    <section className="content-header">
      <div className="alert alert-danger">
        <strong style={{ color: "white" }}>Success!</strong> Voter has been
        added
      </div>
    </section>
  );

  const section = <section className="content-header"></section>;
  return (
    <div>
      <div className="content-wrapper">
        {props.state.success ? alert : section}

        <section className="content">
          <div className="row">
            <div className="col-lg-12"></div>

            <div className="col-lg-12">
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">Add Voter</h3>
                </div>
                <div className="box-body">
                  <form onSubmit={props.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-control"
                        placeholder="Full Name"
                        onChange={props.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="voter_id"
                        className="form-control"
                        placeholder="ID number"
                        required
                        onChange={props.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={props.onChange}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        required
                        className="form-control"
                        onChange={props.onChange}
                        name="constituency"
                      >
                        <option>---Select Constituency---</option>
                        <option value="Adansi-Asokwa">Adansi-Asokwa</option>
                        <option value="Fomena">Fomena</option>
                        <option value="New">New</option>
                        <option value="Edubease">Edubease</option>
                        <option value="Kwabre">Kwabre</option>
                        <option value="West">West</option>
                        <option value="Ahafo">Ahafo</option>
                        <option value="Ano">Ano</option>
                        <option value="North">North</option>
                        <option value="Ahafo">Ahafo</option>
                        <option value="Ano">Ano</option>
                        <option value="South">South</option>
                        <option value="Ahafo">Ahafo</option>
                        <option value="Ano">Ano</option>
                        <option value="South">South</option>
                        <option value="East">East</option>
                        <option value="Ahafo">Ahafo</option>
                        <option value="Ano">Ano</option>
                        <option value="South">South</option>
                        <option value="West">West</option>
                        <option value="Odotobori">Odotobori</option>
                        <option value="Aminsie">Aminsie</option>
                        <option value="West">West</option>
                        <option value="Manso">Manso</option>
                        <option value="Nkwanta">Nkwanta</option>
                        <option value="Manso">Manso</option>
                        <option value="Edubia">Edubia</option>
                        <option value="Asante-Akim">Asante-Akim</option>
                        <option value="North">North</option>
                        <option value="Asante-Akim">Asante-Akim</option>
                        <option value="Central">Central</option>
                        <option value="Asante-Akim">Asante-Akim</option>
                        <option value="North">North</option>
                        <option value="Asante-Akim">Asante-Akim</option>
                        <option value="South">South</option>
                        <option value="Atwima-Mponua">Atwima-Mponua</option>
                        <option value="Atwima-Nwabiagya">
                          Atwima-Nwabiagya
                        </option>
                        <option value="Atwima-Nwabiagya">
                          Atwima-Nwabiagya
                        </option>
                        <option value="North">North</option>
                        <option value="Atwima-Nwabiagya">
                          Atwima-Nwabiagya
                        </option>
                        <option value="South">South</option>
                        <option value="Bekwa">Bekwa</option>
                        <option value="Bosome-Ferho">Bosome-Ferho</option>
                        <option value="Bosomtwe">Bosomtwe</option>
                        <option value="Ejisu">Ejisu</option>
                        <option value="Juaben">Juaben</option>
                        <option value="Ejura-Sekyedumase">
                          Ejura-Sekyedumase
                        </option>
                        <option value="Asokwa">Asokwa</option>
                        <option value="Mampong">Mampong</option>
                        <option value="Asokwa">Asokwa</option>
                        <option value="Bantama">Bantama</option>
                        <option value="Nhyiaeso">Nhyiaeso</option>
                        <option value="Oforikrom">Oforikrom</option>
                        <option value="Old">Old</option>
                        <option value="Tafo">Tafo</option>
                        <option value="Suame">Suame</option>
                        <option value="Subin">Subin</option>
                        <option value="Manhyia">Manhyia</option>
                        <option value="Manhyia">Manhyia</option>
                        <option value="North">North</option>
                        <option value="Manhyia">Manhyia</option>
                        <option value="South">South</option>
                        <option value="Kwadaso">Kwadaso</option>
                        <option value="Kwabre">Kwabre</option>
                        <option value="East">East</option>
                        <option value="Akrofuom">Akrofuom</option>
                        <option value="Obuasi">Obuasi</option>
                        <option value="Obuasi">Obuasi</option>
                        <option value="East">East</option>
                        <option value="Obuasi">Obuasi</option>
                        <option value="West">West</option>
                        <option value="Ofinso">Ofinso</option>
                        <option value="North">North</option>
                        <option value="Ofinso">Ofinso</option>
                        <option value="South">South</option>
                        <option value="Kumawu">Kumawu</option>
                        <option value="Sekyere">Sekyere</option>
                        <option value="Afram">Afram</option>
                        <option value="plains">plains</option>
                        <option value="Nsuta-Kwamang">Nsuta-Kwamang</option>
                        <option value="Afigya">Afigya</option>
                        <option value="Sekyere">Sekyere</option>
                        <option value="West">West</option>
                        <option value="Afigya">Afigya</option>
                        <option value="Sekyere">Sekyere</option>
                        <option value="East">East</option>
                        <option value="Effiduase-Asokore">
                          Effiduase-Asokore
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <input
                        required
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Pin"
                        onChange={props.onChange}
                      />
                    </div>

                    <br></br>

                    <br></br>

                    <div className="box-footer">
                      <button
                        type="submit"
                        className="btn btn-primary full-width"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
