import React, { useEffect, useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from 'react-bootstrap/Accordion';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import axios from 'axios';
import { Link, Outlet ,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';



const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitTask = async (e) => {
        e.preventDefault();
        if(!phone) {
            Swal.fire({
                title: 'Please Input Your Phone Number !!!!',
                icon: 'error',
                timer: 2000,
            });
            return;
        }
        if(!password) {
            Swal.fire({
                title: 'Please Input Your Password !!!!',
                icon: 'error',
                timer: 2000,
            });
            return;
        }
        const resultPhone = phone;
        const resultPassword = password;
        setPhone('')
        setPassword('')
        if(resultPhone && resultPassword){
            const res = await axios.post('https://dev-z1m.z1platform.com/api/login', 
                {
                    phone: resultPhone,
                    password: resultPassword,
                })
            .then( ( {data} ) =>  {
                Swal.fire({
                    title: 'Success for login !!!!',
                    icon: 'success',
                    timer: 2000,
                });
                navigate('../homepage');
                return data;
            } )
            .catch(function (error) {
                Swal.fire({
                    title: 'Phone and Password Incorrect',
                    icon: 'error',
                    timer: 2000,
                });
            })
            return res;
        }
    }


  return (
    <>
      <div style={{ background: 'white',minHeight:'100vh'}}>
      
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={onSubmitTask}>
                            <div style={{textAlign:'center'}}>
                            <img style={{width:'150px',height:'100px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEOCAYAAACn00H/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACU8SURBVHgB7Z1ddttGlsdvQZIzb8NZQZjZgOUVBF6B5cfunj6hpxdg+znqCErsZzsbaMunJ9OPsVdgZgWWFzDdzA6UR8cUaqoKkMwPAFX4rov6/85x7IiESIDg/VfdTyIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABojSAARmL+ajGjO3RCIrorpIzV3TgjSfPbJwhaqf+uhBSrVKYf1P8vV3+6uKQJM//7Io4Oo6/VdTiWJI8pVddEXxeNpCt9TYRQ1yNNfwnhegC/gYCAQTGicUQLEYkHyiDGVJ+VMqznynBe0ETQokEH0QORysWtWLizEiSW6e/p+erRxYoAGBAICBgELRzRv0WP5bV80sBIFrFSInTxzz/87ZyYooVDHIizhkK6hxKSCwgJGBIICOid+f8uTkQqXnUkHLuw25EoMZ2LL9T16Eg4dlEurpfpRyMkVwRAj0BAQG+YXccX0ZmUatfRM9po/vOPf3tKnmN2HUL83JOYbrKSv8v72I2APoGAgF4wq+w7ylASHdNwXOZG08uV93/+47/PZCoTGo4rKeSj1R8v3hAAPQABAZ2Ti8c7/U8aHi9X3iOIxy2RoMX//fHVawKgYyAgoFO020qJx3saRzxu8GonMqZ43KDiRPeQ8gu6JiIAOiS6E72iccVDc6zexwvyAJ1AMLZ4aASJd3pnSAB0CAQEdIZZaZM8IQ9Q72OhjHfvwfsqjCtPCi+ETDHLY1IAdAYEBHSCNpY+rLQ3Ucb7zBQujsWd6IzG341tcjz/+yIhADoCAgK6ITOWvjEby5U1/2mxEGoXRJ4hIvF4VFEFkwICAlpjXDUeGkuNcWWN4PtXMQcfBVUzo0Ma1bUHpgMEBLTHz93HZw5pQQNielv55braArsQ0BUQENAaIf0InJcxuMGMom/Ib2b0RT9tVEBYQEBAK9Rq+2SAthxt0W6bwSrifRdUTSTpAQHQEggIaEcU8TBEEQ1i1I37yn9BVbEhsYAbC7QFAgJaIfTQIwYIIe7SEAhicT0Md/yN0wAeQEBAY/IVLA+DKQd6nyL6mrhwzUjsgJdAQEBzDlkZoNlXP/3lS+oZLjsyg8AOBLQDAgLa4H2weBNJ1/9BPZLXm8yJCVFEvQsqmDYQENAYcTBQXKEr0p6D27x2ZAC0BgICmiNRS7BDTAAEBAQENCKvtgYbiEjwCaCT3pDRbwRACyAgoBmc0lVvWFNvA5VYZaTdIGlFALQAAgKawSldNeOq1wmFHOMfsj9BBWEAAQGNEFLGxAjZv7GMiRtrCAhoBwQE1Ea5a445tOvYRr6lHhEHvOIfiktfZsYDvkBAQH3uwF2zR8rrmgiS2H2A1kBAQAPYxT9o9eeLJfUElwaKm6SCet2RgTCAgIDaqNVrTIxQ8Y8l9QnHjDSB+AdoDwQE1IJbuw6DkB+oT/hlpK1Wf7hYEQAtgYCAenBMVxX97kBYNVAkMye+X0EFwQABAXWJiRsf+xMQk5HGbUfWt0sPBAMEBNSCW7sO6jtdlWNGmoCAgG6AgABnOLbr6D9dlWFF/p8uEEAHnQABAe4wjH+kRL9Qj7CLf6B9CegQCAioQ0z8QAPFTaTsVVBBWEBAgDMM23WsenXXHLIU1CUB0BEQEOAOs3YdLumq+S6iKTFxAw0UQYdAQIATHNt12NJVTVHkQfO57txG+uqKfFtGmvqcWc25B+MCAQFucGzXYQsY66SAgxbnxW2kr6UiX+/GlCg+JgAcgYAANzgOkLI3UIwFNYvrsBzpa6v/0IKqRLGlWw8EBAQEODHFdNW8KPK4ocGMiRv2Boqx+S/HdjVgFCAgwArPdh3V6apbKbgNDCbLAVKWBoq358TRXQlGAQIC7HBs10EO7pobogaB9CkOkMrPSe3MHhAADkBAgAP8Bkg5pKvGN/8Qol42FceRvraK/K1zktiBADcgIMAKt/gHOTRQ3HJB1TWYRxOsyN8+p9n8pwVEBFiBgIBKOLbrkOTQrmPbBTWrlVXFMSPNVpG/e07cUpTBKEBAQDUc23VY0lULiyJrBI4ZDpCyCuruOUWCWBVJgnGAgAAbMXHDlq5aJBbC7TxZjvR1qcjfOSdJIiYALEBAQCXc2nWQy7zvAheUc0EhxxoJl4r8feZf/fSXLwmACiAgoBpmvnDlilk6PKfIYM4cDWZMzLBW5EdRYdquvL6+TwBUAAEBpXBs1+GUrlrignIxmNxG+kqH+eelMZ0DpPOCaiAgoByeFcnV7pqKosjogCrFgeUAKYcGilRyTk37hIFwgICAUhhWJDvM+y5PwbUGjjnGP0SNivx9jtFYEVQBAQHl8BsgVTtddYe5xWDGxI2PVhfWSeWjaKwIKoCAgEI4tutwSFe1u6C+KBcJlg0U7RX51Vl2UfOBW2D6QEBAMRwbKNrTVWOy/4640WMe4tRA0XJOdfuEgbCAgIASInYdWV0GSFkeLw0cTzIjzeWc0FgRVAABAYUwHCC1tD3HsSiyOHDMMSMtslwTt3OasZy+CAYBAgL2YNmuw5KuanB1QRUFjvk1UGxUkV/8POxCQDEQELAPx8yblN5UPVxzFb33XCFlTIyQZBdU53Ny7BMGwgMCAoqIiRvrBg0Uy566k2010Yw053NCQSEoAwIC9uDWroNc0lXrFEXuBo45ZqTZCgjrndMMjRVBERAQsAXHdh115n07sjORb4IDpGqeExorgiIgIGAbhvGPVNDbqscbuaA2Au4MM9KsgqrOKaYa2PqEgTCBgIBdYuKGaN5AsYybiXx5RhovUZXS1pF4TjWz7DBgChQBAQFbMGzXYU9XbVAUqQxm1sKDZy+oZeWjzc5pjsaKYBcICNiGWbsOp3TVZi6om8BxTNxYW11YMTXhC6Tzgm0gIOAWlhXHDeZ9O/9qFThmONLXJSOt2S6T2eIC9A8EBHyGY8Wx6MVdkxEpg8lvR2aLfzTOskM9CNgFAgI+w69dh0O6anMBEEJ8Q9zoU1AxYArsAAEBt7Br1+GSrsqvKLIdgnoTVAMGTIENICDAwLNdR3/uGqZYM9I6yLKLCYAcCAjI4Niug3p117BDkFxan9RyTDHDNG/QIxAQkMMu/tFfuipTnAZItd1lYsAU2AACAgwcB0g5zPsObbXcWUfiCnb6hIGQgYAAnu06XAZIpUGtlu0ZaV1l2aEeBORAQADPWIElXbUTdw0jbPUfmq52mTd9wgCAgABNTNwQg7hr+OAyQKqjMcW3fcJA8EBAALFs19HVvO+pILvvSFwBBkwBAwQkcEytBDOftssAKW5FkW1Z/fliWf2MbgUVA6aABgISOhwHSNnSVTkWRbZAWtxXms6z7A6QzgsgIIBnrcSQ7hr/sWSk9VGRL0jUnrECpgcEJHAY1kp0Pu+bPfYGijF1DwZMAQhI8DCrlRgyXZUNH60urJj6AAOmggcCEjA8Gyha01VDa6B46VCR30+WHQoKgwcCEjJHDA2ALV31MCyj5pKR1pehF4Jd+jfoGAhIyDCslbCnq6KB4ia9jimWGDAVOhCQgOHYQNH2HIZFke2ILNek34r8GQZMhQ0EJFDyBopz4oS0B9AD88vbB0hFPafbhtYyBmwBAQmVOywN7bLqwV7dNR4iyYOOxAKB9JCBgAQLBkixx6WBYs9ZdoIwoTBkICCBwrBW4hIDpHawFRAOU5GPxooBAwEJEI61Ei4FhBggtUs0SLsRKa8fEggSCEiIcKyVEOO7a3xCSqs7b7BdJgZMhQsEJExi4oZtgBTHosg2WDLShsyykyRiAkECAQkQhrUSKwyQ2mNZ+eiw9RlorBgoEJAQYVYr4ZKuGlwDRd8y0g7ohEBwQEACg2mtxJuqB1kWRbbDnpEWDZyRhgFTQQIBCQ2elcO2BopBGS9bRtoYWXaoBwkTCEhg9N7aonvs6apRFNZ0POFV/OMGNFYMEAhIaHAbIOVRuqo3CE8r8tFYMTggIAHBs1ZCvq16NMABUvYGiuNV5McEggICEhJ3GBpa2XP8Q9IVMULttpbWJ420ywyulQyAgIQFv1iBwwCpdumjzHZkTgOkxjonCRdWaEBAAgIDpCZB9Y5s3Cy72fynBUQkICAggcCyVkI4zLsIa4CUPSNt7Ir8sD6P4IGAhALHDBmBAVKbuHQkHn2XiQFTQQEBCYeYuPFx1Hnf/uEyQGrkXSYKCsMCAhIIg7e2aI+1XUdwDRRtGWl+ZNlhwFRAQEACgGOthHLF2AsIpYwpIOwZaX4Iqry+vk8gCCAgIcAw/mFNVw1vgNTS9hxfsuyiA4IbKxAgIGEQEz84uGuGw5KR5tMuEwOmwgECEgAMK4RXDvO+w1rl2hsoxuQPGDAVCBCQEODWQBEDpPb5aHVhxeQTXyCdNwQgIBNn1NYWTbGnq84prAaK9gFSvlXko6AwCCAgU4djrYTEAKlNXDLSfDPYQgTXYiZIICBTh1+txJVDA8WYAsKpgaJvSAyYCgEIyMRh2EDRXv8RWgPFiFn8I2OGAVPTBwIyYXxobVEb6TDvOyz/us8DpKoJrdVMgEBApgzPWoll5aOBrWpdMtJ8zbITkQhrVn2AQEAmDcNaibWn877HwqWBoq9ZdhgwNXkgIBOGYa2ES7oqCgg3OfJaUDFgauJAQCYKxwaKLvMuuBVFtsT/AVI2UA8yaSAgU8Wv1hZuCMbumh5wykjzfJcZCUI9yISBgEyXmLghLAbTb3dN99gz0ubkeZYdGitOGwjIRGFYK2FNVw1ugNQ0MtLmGDA1XSAgE4RjrYRyxSwdnhNWQNaWkRZFLNJkMWBqukBApsg0B0jNiVtRZAv0AClrRhoXQT1AOu9UgYBMk5j4gQaKmzAaIGVDUGCp1wEBAZkgDGsl7OmqTNw1nSEmVZGPxooTBQIyRfgNkLLWfwQX/xDWFN4T4gQaK04SCMjEYFkrYW/Xwa4osiWXDg0UeWXZRcwEDzgBAZkaHGslHArmQsJlgJQKss+JERgwNU0gIFODYa2EbYBUno0UjMjYMtIM0qHti0+gseIkgYBMDIYDpJZOz0uZGcx22MVSuF03j5h5OTkRtAICMiFY1koIh3kXmiiYHYg9I00TsRMQDJiaIBCQKcEx0yWlN07P42gwG+DUkVhhguySrogTAp15pwYEZEpwrJVYu+0stMGU6i+aOtJdKKUQzs/1ARQUTg8IyISY4gCpLbgFjptQJyNNptyuxwyNFacFBGQicKyVcElX3WHqcZArW0baFgzTn9FYcVpAQKYCxwaKgt7WOuDTtOMgsqYgGLFhFgeJDghurAkBAZkO/Cp9RU2D+ejikl3guA5NXHTMstMwYGpaQEAmwiQHSBUx7XTeJdVEXjumQfvDHI0VpwMEZCowGyAlqZnhUwZzuoH0dSNxdEuD9okvkM47FSAgE4Blha9sHM9Y0jSpl5F2w5rhjozZYgeUAwGZAhwrfJu24uBoMB1wLSDchWOfMDRWnA4QkCnAr4GiW7uOAibbWLFFbyt2fcLUDgRxkGkAAZkAQsqYGCFb1i84GEx+mVqixTXhmFiAAVOTAALCHJ4DpFqvmJeWx7mtbptlpN2AxopgJCAg3LnD8ou4pDaspxVIb5qRdgPHPmEiEmHNuJ8oEBD2TG+AlPV4FQeZWGPF9qm4GDAFRgACwhxB7OIfS+qCaTVW7CKGwS0OMpv/tICIMAcCwphJD5Cy/p7JuLEaZ6RtccCwoBD1IOyBgHCGYyZLV4Z/IgOmmtZ/7MJxwFQkCPUgzIGA8CYmbnzsxvCznMhXhOxOCLkNmEJjRf5AQBgjInYT3pq16yiBm8EspMuZHvwGTM0xYIo3EBCmBDJAqhp+BnOPthlpW2DAFBgYCAhXOA6QIurW4DM0mJtI2XEcR/cJ4+bWO0A6L2cgIHyJiR/dGnyOBnMT0e0sD+MeZNbWRBA7NyzYAALCFHHA7ou36iRddfMXMjSYW6Tdp94yHDB1jMaKfIGAcCXltfVv266j9PfyM5if6ac1/ZK4gQFTbIGAMIRnA8XeDNuSeNJpRtotHPuEXSMOwhUICEcOmVWfa/oKeDNtrNh5RloOxz5hUURI5WUKBIQjgp2AXHWarroB1wFTqaC31Bep7O9394AkgR0IUyAgHJG83Fey53RbdhP5NKLHa8IvsQBBdKZAQED/9N05l5/BbDdAysZE+oQB/4GAgCFYUp8wM5h9ZaTdwHHAFOAJBIQjETPjsO53h8DOYMoBBI/RvBTl4lwRYAkEhCMpq+rrftJVd+E0YGqYWSZ83HpC/kaAJRAQjjBKXe1q3oUDXAzmVdcV+YV8YuTWk4jZcAUCwhBWuf5DTQ5kYjDlQA0g1T3Cp08Y86aYIQMB4QqXXP+Pwxh2NgZTyNc0EGr3x+Ee6a1GCPQPBIQvnTfi6xrdrnyQ+Mft6w1nnBszZMaYpAvyHEHS+/sYlAMBYUq+avN76y8GN+heGyMjqH3Wf+zCoN19mpL/og9KgYAwRrkofiR/0e3bL2hAjKgKj2MhUp7TgJhYmfT6HrmE+4o3EBDG5AZ6RR6ixG1QY3n7utfjvK4Ns/sYw1iu6aWvuxAp/PysgDsQEObIVD4i/xh893H7wspIq2vi36r7YJzPKcvY889Qq9jHxeqPF4h/MAcCwhzvDKZa7cpI3qcxWVNCHu3M1OdzPmjsY4fVf1289My1t0ojwu5jAkBApkBmML0IqOvV7pjGUpOvuh+SH2g/f0Ijo9xFege0Ig9Q7+Xp2PcI6AYIyAQwBjMyBnNFI2JW2nq16wG62luJyNjuvVX+uYxO1i9MvZeR4yHmHoHrajJAQCaCMRCZ62hFI2AMgwcr7U10HEa/LxoH83n4tNI2oirUPTKSiPh4j4B2CAKTYv6PxVyk4p3+Jw2E74Zh/tNiIUi8ouG41DsPX900o9wjUrmtPNmdgu7ADmRimJ3I7/LeIFXZOmCeqlW256tKsxOJ5Fc0wO5M1+ao6+/VzmOX293qMIH1lblHIB6TBDuQCZOvvM+oh5WmTsNMf6enQ7Yqacv81WJGh/REROaadI02lI+4FcbN/2fxRAjxmHq4R0yh6++UcLpHQD0gIAHQpZDogjhdUc25gli7cOiaEmU4v6G26F2YrvZe00uuhnLjenxNuEdADSAgAaGFJKLogVoZntQ5zrSOT5VLjLGRLMIYzpRikuKxEHTsfKASDSXIb1KZvp6SkTQ7tDt0IqQSVqGuSw1u75FDukCKbjhAQAJl/vdFTNpoCporg3F38zFlHFepSPWUuEvlgtAddVc0cYyYrI2IHEdRdFftKmY3j6mV+ZUWjZTSD3p2RQgr69zdp69HfHM9lEjM1M0xE5JW+pqo6/ErBXSPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOeD0PJEmevUiS06cE2JAkyYzo4EmS/DUh0Bn6usrocHH+3am3s8Wzz5705z/PfhJdEX26Uj9fEZgkh+QzQpwk58+eUDdcJmen91yemCQ/xOq1fybzZdjiikT6NPnuuwvqkCR5vlBSfkYk56VPEuKC0k9P1ZfxavvYZE7iUL/Xiol6YkXi+rzsfavXP6ZIvb6sN6mw8r0Wvs4PJySiF+Odp/5co1eVr1+Ofj/q96vXoOu3lKZLm2E011VIdb71pvuVIVJ5Xvw6bc5Ln4+8qnNee69N4oH+ru6/viRtYtR3WP/PpXmNNP2g/q1e46/L7PhMdIpes/J+KblPPh+r7hc6SKh4bPGlutef3ryHAY+1YD4LdY+lr+t+DmMRURCoD0auH7o+O785Lgt+z1XX4pG93rcXJNNfqp4jr+WHoi+Luclk0XvdPFiuqt63ev1LdcP+SD2jruubcc9Tfa6W169AG7pjI7JSGWtx9M4YuArMdZXiNfVMdl50To0wxnnjvA7fn53ZF23a8CtheKcMpfpDTxzEK3sNIc70MepYmR1/9L78Ncrvl+S7bx+ViUf+/lZKEJPCB6V8WyYAvR5rxVzD+Pb++v77BXlOGAIi06f21aL6QiiDoFdU5z88V7uBGjOyB0BE9KDo59nKnBY0EdR5Fq7c/DtP9WVXu1Szy5gWM/UZvKgSx+yzMIY/pnYoY5m+5rDSHh51fykhOX/2rMFOZjimLyBSnpuVjJ2ZcVup1ZFMZUL77quxiTN3wS6HZzQtjkc5T6l3qSV/MvdVCemCpogQj8sfPCx2t0paSkFP1TV7dPMn+3+pd7dL2ruOxm12QaAUeU0vczefl/gdA9H+QOVvpMovMFFJvMLc0IyDuTfn/Pm89PY/+yIaSlblV9Sh+GkDoHzvl7UOquf/9eI8Dw9lfHp6+mvZ4/mq+92+4RR3qQGNrmuDFf/hAc2rzku7q/SOo+i1nj179uXuscaYFe0ERfooObO7d/PFwcLcIzpedRbQ7kOqa5RUxCEpPcnv/U10UoLe5S7JQ/wWEBW3qPJzarS7Se0YCgyJXt18ekRsEVd6e79zQ5ldyGcf7O6qXK+Ylc+4UQCv5F0oI1fl8y2inkvCj/O0oc9JvSf9mnPqgP6vqxvn56dqhfv8axXs33NZrdfiP9RfO+JzUOyySw+cxDA/Z7Ww+2HlIjihYOJlOtHn/Jl2Ve9e45ggIPWxiYfOXsrdTftIetjgC6ezUd5Ikh+ENL74kf3b1y/VR6RdCXur88JVuVrRqaVtTAOifbRnp6dbgeL6193/88wznb7OMos2iIyLq3O6ua5tSQsWZterQrMh5Htl/HQw/1JG9KtI1cKA0lV+zOV+Vl07z0Cxm3OXaL73efnPFTHCcxdWOZlhkS8KHzRxj9O67gHaTNHNVwKjor906ovyY9HqXL3ZndW3MBlIbl+sGgjxQl2Lspt6Jq+FNjKtMo18OM/1tVgm589LHr1xW+0Zo0udSkpNGOC6atZr+ZW6vuX1XpES7tL07eu975DZiWmhKHanKZGlWOjLlP0n/7FJ5dXnepll0slfHOOS5ejsLyt8xEO7BsXB0WO1II4LHq5vywaCpYBkfljjjy6Ie8gfm6xu8tXdBXlH4epcC+f27kivyvvBtgtbUSeMfZ41aigyI/hWv2fbLrmCYa6rMbQVX3NZetyFik8Un5tcPyqOB1WiP1cjMOqXP1Fivaqq2ZkkIlKLhuclySByrsSj6CDlOj1tJ7Y9wjMLKyrJAsmyOhKaEMZAZVksm+wYH7Hi/kVkdZ5C7Q6i6EvyL1OvI3TB36dSoTa7kLNvvzKZVtTUhZenqf7wfGpZhFXMMrtV9KcEmXrdiYOdgKgbTm25deHSHsoAfbrfYkXoMZZUx/52HwOjdyEV9HmeWZHisvTPVhGjNn5yoYvubMWE7FAxQPU9uucSb9EFsJmQrNUf+VC7js3x5nq5CYuOYXbudp0GekH1sLWrr2dYubB03EPdcMVGRscvJpoSmGcAvS7OOup5Va4NQ4EvPONIrcTpMXVEHgsZ5TwPD+mkKt2V6LY1yWbltK4deqXe97L2wmWo6yqVQY82UqXL4h3Z7u9Ncna6JAeyotvMuOVio/+82X+ermE4mucBeZ2++4D2d276PS2pDlq0rBzM3WIlg6FEQVTfJxFdShUjEun6gsNimI2AbOTh7z+og+aTTwmMlHDKfcPa/+7D1gyv41Rp7YI8HOM8rehUSxUM1kZ/07U2k/Jwof5+SfUY5LoeHsonm8KoDP/LoiJBcSjen526iUd2gHis3v9lYu/wkAXPM3T67sXeAiGK/p1q4rZDSsgrE2fis6cJTQg+Lqzo6EVZ9atL0DzxuJrThTxPfLn9Uz9jHy69lMrIDcNy+6d+x3iEkIPcW124y9R3RX82y92f5xXPc3Igb9+iAuKH/0q+f/7K/Ti9CNSp0Duk6W8EWMJiB5IXCxZ/eSKdpfBDQjZEpFc9Dttej8l8zPHt/w+xKhfiTBmJOgV72pi223qPcZ4VJDdtyk3K6372lLS5JYpocl2zTrbtfeK6sajpZbW1IJtlDSKTe3bXify8g8liQQuzMxPi0tRQ7VXYm3qMu1k9T6HYeu3nB+V4LyB61VVaLKgxN7AgO+wKivbQVbyfc/AHW5XH6hrXOqCsnbsru+epW1tTz6yvaZW3HS+n5DIIsW5iAOtfV6IP1AFZrOm5EhHa6YSrBMVkONLTimPnJU0tdbfdY/NN3Ps+Vp5n7Yp84A9eu7DyLe8LAp+R+UwI3f5jymycZ5J4nBxhilb5JW9ol6hMC4RC0pNqF2SnTS0v64xZAP7hdwykfrESY9wCidnsB/m6PLW34PcIfvUK9vMsYNjzvNIG2JdmnVLWj8PoPlhUUOUsIjorimtkrjz5m+mw264305VZIMj1/X7F96jF/TDWsbxw8f2MQhYw7HD3IeQ8OTt1Ol8zITCir4sfvf6ll4mERA9oNxgrTcuHZP/5enZJ0dAlk09/UpjVkqr3XdkJlM6oq2Cw0O61bx8VvD/9mX7T/jxN59JF/fM0QejEVay30VP7KJvcl9IvRJ/eJPZebd1e19LrpD/36HHh60j5q85sS4on/sUF3V83jote5skbhWSCcnAsI6FcV+KuOmaudjDqZ2LnfahrFxlXpM4Ge+Pqsiq9Xz6f15PEPpHwy+Jj6cJhqmDTY5+oY+/WPRZ4DIqVhmOCQ5a8IHHMdgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwWbwtJAQgBG4bNZJbi3IAfAICwpCsgjh6VfoEQcvdSvDbeSrqMUo/PS2t4D1//q+i428fu0Xq43Vltvr7+q1ueFhlAKt+78Z7nImDo8cylTFlMzduOvuudNt+ovWPZa+RJM9/Vr//2EzIq+D2Osj0bd7a3Omx23PQ5y3XD0vfx/kzM8AoOTu9X/EeZjI6XAhJerhSvPPwkkT6ustuB7bzKjzm/IeXRNEDdd0f7lajn33/7ImQonTglRTyx/PvTl9u/z59XcS87JjDAxnbBnoB/+A5Ex1QPktZ9yZa7f1J5VXpMaZ78dH78qpm9ZxUzitec569Tt6yXSpjL5WYKQNV3YSv6vcSnT979o2eL5F3Xj7ORqvqfknytWnmKuhJNn/iWXF7G9PuwrVvmu46W9bOxPKYeW+m7fm8+DliXmUos6mGR++VeLzIfpe4yM8zHwcrzKxwLVbdVp5XnVfR02/md6d7bUREunmt9+8/kRa1txfzz/fO/p/1eo2ZIAxhNdIW7KAMTtWKvoQr80U2RvD5w6peRyUvulKr/K3VtenlJehMRPRC7Y5Wdec46zn38lqPKhZqp5E+LOoVdNufiMQT9Rq/jdjEML9+h++VYJ7nDQmdyHYC0uxQdCPGsmO1EItInqnX0LvM++Qr8vq8rO9YGVU7M8AP7EBCQ4lO1sZbGmPWZnrgDUqE1Cr6kzYMV6XN+UqPNXPuk0w8Pt2vaFKnhWmhZ4mP2gFX6hbk4p56v1daMPWwM+djTXdpM5f8YZXwmMfk+h5anQPfgYAESGagGhrBEkxMQIql+udxUmt88IEWsJmeOpg4zbmut7vpA7NrM4IpVlr8St1qW8foZp5atMWFSzfWTDBtkwEBGBe4sHgz2+8yfL1yM8TfXqrn3der4twIzpLvTp9SG/K227UMnxCmbX5XQWN712UzXpXav44x8PcoOnqldhRPVJA4tuwYTsx/U/px5/eYluiVL0bRVX1X4xCIecH9d1n1+Rd9PmhvzhcICGekPFEG+GT7Zwd6kl/icnihEWxIHvDVhrCuoTs27quuEOJd9RO6G22cG0rlUvshMa67bACanodRYECjL/Vr7wvBkfoM5avKF5JyST7GQjJ35fbuVR7o97msOGbn8zGffWXmHPAXCAhnpPxFGaaL7R+KWgZ8zwg2IB9MpN04yhWV/khjIkVlUoGe3KfddtQhOiajYknKHShvfm+BgKS/6VSy/SFZn5Ykj8rfs01cxkRnkJnhWpusV5XH7H0+Kdx0jIGAcCaK/pV8pwLYHfDZCNqMq5zv1IPM839cZZlFdV1RegWqfmfJ9MG6mIB+5eN6p3TYqYBodFwpSZ4vb7KsCsjPzbirlhvvZ6X+uig64PNgLvmBfKRi+mMZts8H8AJBdHCLW0qqMvi6GFFsuSlUUHn9VZ2U1ltk+jr7x0HrbLCxydxTokwEs+B/rV2efLx1LACeAQEB9ZDSzDs39Sd5JpL66bGuIKdGXGvR0em/j11G4eqak4ThaFcTKJZSu/dil6w38xxBC9esLQDGAAICGpOl7pr6j0udydUkHdi4raTU2UuzqroUHWcx7TB0TCA66twFNQzXCeXXKvn++asiITSuvO+fvbitjUk/nRMAnoIYCGckxTe9l7YQdNk6JdeRPJPrPonDd7mI0Nlfv61l9PQKW+0s7qn3/bMORKtz0kJ0qVbfK8oK72K66Ytl2n6s67vKPECLpblWdKDfv9pdHC7UuS7z89S7uznp3limdYt4o8TjUdJlLYgP90vR65PuhUUL9MLiBwSEJZEypLTK/i3mew9LKjM6S2kPyC6pPBW38LHPhvHolW6EqHYLHwoK/pYVv/cmvfWrrC2K/IZ0em8mHFem+pt0xtn1y1KDKtV5CefeoFXXofIxsqUp6/caUUUdhHn/2g2XmLiPEHdNOnZ27Er9R7u53iRnp0vqlmVpCnNa+NNVdky0dy4yElci1aInaoib1IWm+h/zkscJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJD8PxnOTcPK1SpJAAAAAElFTkSuQmCC"/>
                            </div>
                            <div className="social-icons">
                                <b className="register">Login To Your Account</b>
                            </div>
                            <div className="login__field">
                                {/* <label className="register lable_input" for="phone">Phone Number</label> */}
                                <input autoComplete="off" type="text" className="login__input" id="phone" placeholder="Enter Phone Number (+855XXXXXXXXX)" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="login__field">
                                {/* <label className="register lable_input" for="pwd">Password</label> */}
                                <input autoComplete="off" type="password" className="login__input" id="pwd" placeholder="Enter Password" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="login__field">
                                <button className="button login__submit" style={{ textAlign: 'center' }}>
                                    <span className="button__text" > Sign In</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <Outlet />
      </div>
    </>
  )
}

export default Login