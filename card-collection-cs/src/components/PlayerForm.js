import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext, useField } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addPlayer, editPlayer } from '../actions/actions';
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './css/PlayerForm.css';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const POSITIONS = ['Attaquant', 'Défenseur', 'Milieu'];

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("Ce champ est obligatoire"),
    lastName: Yup.string()
        .required("Ce champ est obligatoire"),
    birthdayDate: Yup.date()
        .required("La date de naissance est obligatoire"),
    position: Yup.string()
        .required("Veuillez choisir une position"),
    // clubList: Yup.array().min(1, 'Veuillez saisir au moins 1 club').required('required')
});

let initialValues = {
    firstName: "",
    lastName: "",
    birthdayDate: "",
    pictureLink: "",
    position: "",
    clubList: []
}

const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
      <DatePicker
        {...props}
        dateFormat="dd-MM-yyyy"
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    );
};



const PlayerForm = ({player}) => {
    const [playerClubs, setPlayerClubs] = useState(player ? [...player.clubList] : []);
    const [newClub, setNewClub] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (player) {
        initialValues = {
            firstName: player.firstName,
            lastName: player.lastName,
            birthdayDate: player.birthdayDate,
            pictureLink: player.pictureLink,
            position: player.position,
            clubList: player.clubList
        }
    } else {
        initialValues = {
            firstName: "",
            lastName: "",
            birthdayDate: "",
            pictureLink: "",
            position: "",
            clubList: []
        }
    }

    const addClub = () => {
        if (newClub !== '') {
            setPlayerClubs(clubs => [...clubs, newClub]);
            setNewClub('');
        }
    }

    const deleteClub = (club) => {
        setPlayerClubs(playerClubs.filter(c => c !== club));
    }

    const handleAdd = (values) => {
        values.clubList = playerClubs;
        dispatch(addPlayer(values));
        navigate('/');
    };

    const handleEdit = (values) => {
        values.clubList = playerClubs;
        dispatch(editPlayer(values, player._id));
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col pt-3 player-form">
                    <h1 className="text-center">Joueur</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            if (player) {
                                handleEdit(values);
                            } else {
                                handleAdd(values);
                            }
                            setSubmitting(false);
                        }}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName">
                                        Prénom :
                                    </label>
                                    <Field
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="lastName">
                                        Nom :
                                    </label>
                                    <Field
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="birthdayDate">
                                        Date de naissance :
                                    </label>
                                    <DatePickerField
                                        name="birthdayDate"
                                    />
                                    <ErrorMessage
                                        name="birthdayDate"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="pictureLink">
                                        Photo :
                                    </label>
                                    <Field
                                        type="text"
                                        id="pictureLink"
                                        name="pictureLink"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="pictureLink"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="position">
                                        Poste :
                                    </label>
                                    <Field as="select" name="position" className="form-control">
                                        <option disabled value="">(Sélectionnez une valeur)</option>

                                       {
                                           POSITIONS.map(position => <option value={position} key={position}>{position}</option>)
                                       }  
                                    </Field>
                                    <ErrorMessage
                                        name="position"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div>
                                    <input type="text" value={newClub} onChange={event => setNewClub(event.target.value)}></input>
                                    <IconButton onClick={addClub} color="primary" aria-label="upload picture" component="span">
                                        <AddIcon />
                                    </IconButton>
                                    <br></br>
                                    {playerClubs.length === 0 ? (
                                        <ErrorMessage
                                            name="clubList"
                                            component="small"
                                            className="text-danger"
                                        />) : (
                                            ''
                                        )
                                    }
                                    {playerClubs && playerClubs.length > 0 ? (
                                    playerClubs.map((club, index) => (
                                        <div key={index}>
                                            <span>{club}</span>
                                            <IconButton onClick={deleteClub.bind(this, club)} color="primary" aria-label="upload picture" component="span">
                                                <ClearIcon />
                                            </IconButton>
                                        </div>
                                    ))
                                    ) : <div></div>}
                                   
                                </div>
                                <div className="form-group d-flex justify-content-center gap-3">
                                    <button type="submit" className="btn btn-primary">
                                        {!player ? (<span>Ajouter</span>) : (<span>Editer</span>)}
                                    </button>
                                    <button type="button" onClick={resetForm} className="btn btn-danger">
                                        Annuler
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default PlayerForm;