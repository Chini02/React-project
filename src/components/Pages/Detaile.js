import React from 'react';
import './Detaile.scss';

class AddServeice extends React.Component {
  state = {
     formState: {
        id: '',
        codeService: "",
        idEmploye: "",
        nom: "",
        salaire: "",
        mode: "submit"
     },
     users: [
        {
           id: 0,
           codeService: "s1",
           idEmploye: 1,
           nom: "david_xc",
           salaire: 12340, 
           updating: false
        }
     ]
  };

  resetFormState = () => {
     this.setState({
        formState: {
           codeService: "",
           idEmploye: "",
           nom: "",
           salaire: "",
           mode: "submit",
           id: ""
        }
     });
  };

  onChange = event => {
     this.setState({
        formState: {
           ...this.state.formState,
           [event.target.name]: event.target.value
        }
     });
  };

  onSubmit = event => {
     const { users, formState } = this.state;
     event.preventDefault();
     const codeService = event.target.querySelector("input[name='codeService']")
        .value;
     const idEmploye = event.target.querySelector("input[name='idEmploye']")
        .value;
     const nom = event.target.querySelector("input[name='nom']").value;
     const salaire = event.target.querySelector("input[name='salaire']").value;
     if (formState.mode === "submit") {
        this.setState({
           users: [
              ...this.state.users,
              {
                 codeService,
                 idEmploye,
                 nom,
                 salaire,
                 updating: false,
                 id: this.state.users[this.state.users.length - 1].id + 1
              }
           ]
        });
     } else if (formState.mode === "edit") {
        const index = users.find((user)=> user.id === formState.id).id;
        users[index] = {
                 codeService,
                 idEmploye,
                 nom,
                 salaire,
                 updating: false,
                 id: users[index].id
              }
        this.setState({
           users: [...users]
        });
     }

     this.resetFormState();
  };

  updateUser = key => {
     let { users } = this.state;
     users[key].updating = true;

     this.setState({
        formState: { ...this.state.users[key], mode: "edit" },
        users
     });
  };

  deleteUser = key => {
     let { users } = this.state;
     users.splice(key, 1);
     this.setState({
        users: [...users]
     });
  };

  render() {
     const { users, formState } = this.state;
     return (
        <div>
           <Form
              formState={formState}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
           />
           <Table
              users={users}
              updateUser={this.updateUser}
              deleteUser={this.deleteUser}
           />
        </div>
     );
  }
}

const Table = ({ users = [], updateUser, deleteUser }) => {
  return (
     <div className="table">
        <div className="table-header">
           <div className="row">
              <div className="column">code Service :</div>
              <div className="column">Id Employe :</div>
              <div className="column">Nom :</div>
              <div className="column">Salaire :</div>
           </div>
        </div>
        <div className="table-body">
           {users.map((user, key) => {
              return (
                 <div className={`row ${user.updating ? "updating" : ""}`}>
                    <div className="column">{user.codeService}</div>
                    <div className="column">{user.idEmploye}</div>
                    <div className="column">{user.nom}</div>
                    <div className="column">{user.salaire}</div>
                    <div className="column">
                       <button
                          className="btn btn-primary"
                          onClick={() => updateUser(key)}
                       >
                          edite
                       </button>
                       <button className="btn btn-danger" onClick={() => deleteUser(key)}>
                          Delete
                       </button>
                    </div>
                 </div>
              );
           })}
        </div>
     </div>
  );
};

const Field = ({ label = "", name = "", value = "", onChange }) => {
  return (
     <div className="field">
        <label htmlFOR={name}>{label}</label>
        <input type="text" name={name} value={value} onChange={onChange} />
     </div>
  );
};

const Form = ({ formState, onChange, onSubmit }) => {
  return (
     <form className="form" onSubmit={onSubmit}>
        <fieldset>
           <Field
              name="codeService"
              label="code Service"
              value={formState.codeService}
              onChange={onChange}
           />
           <Field
              name="idEmploye"
              label="id Employe"
              value={formState.idEmploye}
              onChange={onChange}
           />
           <Field
              name="nom"
              label="nom"
              value={formState.nom}
              onChange={onChange}
           />
           <Field
              name="salaire"
              label="salaire"
              value={formState.salaire}
              onChange={onChange}
           />
        </fieldset>
        <button>{formState.mode}</button>
     </form>
  );
};

export default AddServeice;
