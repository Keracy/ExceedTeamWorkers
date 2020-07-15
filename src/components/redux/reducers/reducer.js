import { ADD_EMPLOYEE } from "../action-types";

const initialState = {
  users: [
    {
      id: "5f0dd05a8943753d3627832c",
      name: "Hill Sheppard",
      email: "hillsheppard@cytrak.com",
      phone: "+1 (947) 568-3126",
    },
    {
      id: "5f0dd05a95e062717a2e2579",
      name: "Cameron Farmer",
      email: "cameronfarmer@cytrak.com",
      phone: "+1 (873) 468-3791",
    },
    {
      id: "5f0dd05a7e44eaf6a10a3d94",
      name: "Christa Sharpe",
      email: "christasharpe@cytrak.com",
      phone: "+1 (812) 440-3342",
    },
    {
      id: "5f0dd05a2e66b99b20012648",
      name: "Green Frederick",
      email: "greenfrederick@cytrak.com",
      phone: "+1 (955) 598-2105",
    },
    {
      id: "5f0dd05a16ee3c5430706a83",
      name: "Alba Nguyen",
      email: "albanguyen@cytrak.com",
      phone: "+1 (953) 441-2605",
    },
    {
      id: "5f0dd05a9fcc01323e117ba1",
      name: "Owen Austin",
      email: "owenaustin@cytrak.com",
      phone: "+1 (890) 434-3920",
    },
    {
      id: "5f0dd05a7e13d3ea4998cfdc",
      name: "Lola Reeves",
      email: "lolareeves@cytrak.com",
      phone: "+1 (870) 503-3262",
    },
    {
      id: "5f0dd05ae49f96fd4de64ed0",
      name: "Sylvia Wong",
      email: "sylviawong@cytrak.com",
      phone: "+1 (893) 576-3776",
    },
    {
      id: "5f0dd05a262a34383948b5f2",
      name: "Wiley Fuller",
      email: "wileyfuller@cytrak.com",
      phone: "+1 (959) 527-3892",
    },
    {
      id: "5f0dd05a12e13aafd69998e3",
      name: "Morrow Ewing",
      email: "morrowewing@cytrak.com",
      phone: "+1 (907) 478-2872",
    },
    {
      id: "5f0dd05ad61e874c72c2f5be",
      name: "Brooke Butler",
      email: "brookebutler@cytrak.com",
      phone: "+1 (844) 552-2705",
    },
    {
      id: "5f0dd05a877763701222e440",
      name: "Letha Woodward",
      email: "lethawoodward@cytrak.com",
      phone: "+1 (943) 433-2628",
    },
    {
      id: "5f0dd05a73edbef76e5dad28",
      name: "Rhodes Park",
      email: "rhodespark@cytrak.com",
      phone: "+1 (969) 458-2313",
    },
    {
      id: "5f0dd05aecb0c1ee8323c969",
      name: "Emilia Schroeder",
      email: "emiliaschroeder@cytrak.com",
      phone: "+1 (936) 587-3857",
    },
    {
      id: "5f0dd05ac75a9429d9de7f16",
      name: "Tasha Watson",
      email: "tashawatson@cytrak.com",
      phone: "+1 (925) 441-3325",
    },
    {
      id: "5f0dd05a13e060c058823519",
      name: "Coleman Prince",
      email: "colemanprince@cytrak.com",
      phone: "+1 (973) 563-2397",
    },
    {
      id: "5f0dd05a7a8c0cec563e4659",
      name: "Nita Jenkins",
      email: "nitajenkins@cytrak.com",
      phone: "+1 (958) 401-3023",
    },
    {
      id: "5f0dd05ab7a8924f5cf4bcfc",
      name: "Underwood Warren",
      email: "underwoodwarren@cytrak.com",
      phone: "+1 (868) 444-3354",
    },
    {
      id: "5f0dd05ae08782f0ada27082",
      name: "Calhoun Shields",
      email: "calhounshields@cytrak.com",
      phone: "+1 (998) 454-2375",
    },
    {
      id: "5f0dd05a66f96ba01410c178",
      name: "Forbes Kerr",
      email: "forbeskerr@cytrak.com",
      phone: "+1 (944) 594-3992",
    },
    {
      id: "5f0dd05abd6c4b10a13b0c4c",
      name: "Henson Moses",
      email: "hensonmoses@cytrak.com",
      phone: "+1 (938) 516-2844",
    },
    {
      id: "5f0dd05a0ddc573510a595b4",
      name: "Terrie Lamb",
      email: "terrielamb@cytrak.com",
      phone: "+1 (980) 453-2021",
    },
    {
      id: "5f0dd05a0697b7a01df2dd3e",
      name: "Pickett Travis",
      email: "picketttravis@cytrak.com",
      phone: "+1 (853) 408-2130",
    },
    {
      id: "5f0dd05a2cee3a8e57ba764a",
      name: "Christine Stone",
      email: "christinestone@cytrak.com",
      phone: "+1 (994) 559-2903",
    },
    {
      id: "5f0dd05ae2eea08612a713ab",
      name: "Regina Robbins",
      email: "reginarobbins@cytrak.com",
      phone: "+1 (934) 423-2178",
    },
    {
      id: "5f0dd05a4424b9917d2dde8d",
      name: "Obrien Sloan",
      email: "obriensloan@cytrak.com",
      phone: "+1 (895) 560-3357",
    },
    {
      id: "5f0dd05a72991cfc186dbeda",
      name: "Cantrell Nielsen",
      email: "cantrellnielsen@cytrak.com",
      phone: "+1 (944) 575-3878",
    },
    {
      id: "5f0dd05acce5c3f5bfb246db",
      name: "Yvette Jensen",
      email: "yvettejensen@cytrak.com",
      phone: "+1 (967) 527-2145",
    },
    {
      id: "5f0dd05a8e5433c72c1a2a2f",
      name: "Joy Shelton",
      email: "joyshelton@cytrak.com",
      phone: "+1 (996) 511-2089",
    },
    {
      id: "5f0dd05a5deb3ce97cbd0d58",
      name: "Collins Blanchard",
      email: "collinsblanchard@cytrak.com",
      phone: "+1 (803) 406-3223",
    },
  ],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
