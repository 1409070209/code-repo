import React, {Component} from 'react';
import { HashRouter , BrowserRouter , Route } from 'react-router-dom';
import Header from "../Header/Header";
import A from "../A/A";
import Footer from "../Footer/Footer";
import B from "../B/B";

const Router = BrowserRouter;


class RouterView extends Component {
    componentWillUnmount(){
        console.log('RouterView组件被卸载');

    }
    componentWillMount(){
        console.log('RouterView组件被装载');

    }
    componentDidUpdate(){
        console.log('RouterView更新');
        // // 这个注释在使用ReactRouter包下的代码是需要启动，观察我们实现的Link是如何工作的
        // // hashchange是否被执行就可以知道在hash模式下Link和a是没有区别的
        // document.addEventListener('popstate',()=>{
        //     console.log('popstate');
        // });
        // window.addEventListener('hashchange',()=>{
        //     console.log('hashchange');
        // })
    }
    componentDidMount(){
        console.log('RouterView Did mount');
    }
    componentWillUpdate(){
        console.log('RouterView will update');
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps,nextState);
    }
    render() {
        let image = new Image();
        image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAACiCAMAAADiKyHJAAABCFBMVEX////+/v79/f3Jycn5+fnU1NT19fXNzc3///3p6enf39/w8PDZ2dn///v09PT8/Ppra2vi4uJmZmZxcXHCwsJgYGC8vLx6enr///e0tLSHh4dYWFisrKy+vr6Pj4+enp5UVFSlpaWIiIh/f39GRkafn59NTU10dnU8PDzJycbT3tzl5Of++/9sbWdDQ0PGyL04ODjv8OptbHF9dXdlb2+3rrGesLg5OzSgn6VpamWNioeSkZdUVk13eHLR0836/vGwsLfl6NzT095fVlViYWnt6/UzMjlteH5uXlyXlY4YGxokJCG6vMEyLysAAABBQDuvraFER05MUUZkaFyBf3ZSV12HhZClp5+wbLVfAAAZm0lEQVR4nO1dCYPbtrEegOABgiR4SxQpUseuZHXXh9y0iR3vxkmdttumr82r/fz//8kbgNL6WiUkbSWNq1mtVitRGOLDAByA3wwATnKSk5zkv0Do5yDsl1HxHnDg2UcW49gKfgENKYd3gSMETHZkq/asIysQ3pEVAHD3vTcIReAoJUcTii0THK94rQKBO64GooB71+JAAYcfHE8QuONaHPlVLE4DR0/A/ZycgBsoJ+AGygm4gXICbqCcgBsoHwGc49y+8J2fPPJd0cA5Sn6m3KHyM8A5O/k4JUOBu9QV1K4gOL7v91CpgDtw7kptz2a4U8F/GHAtTLujiIM/9FK9QfzeFtcdOD0T6Ddy/McBR98sCDiSEqoe6jwplX1q1g+4di2iF3K/KnD6TAlTiyU4e9V2hZ8wfI02gG/4Eo2OSV99hP9jzTrXTQEnHengA7+lMFEl6iZRf6njy7ZErRdPhTHoZXQaOPXlthKwf6XeohbVulG7Uq4q2laW/mSRH8oh4JQ1MWqZAfUiaJefCEPk8MFQlxw7VD2PuUAw6QXsrK9bvcwAzxvFulDqVOlam3rJAFvD0WUxfJtF+BETvG2/zgqEh22h7FT3EVUqUetnEY0CPGsHJJMg1ftEcNRIXVXjrsW3chA4xImJWW0nkymetEaLWgUNMka9zPKvnxYTQOCemDyFi3uqmt3rhV1VYruDN4M/R4y2jYQlmB6cFyCXU6BLs/QQMzOmhYDzc9CwdlagVkdUsWz3RNXpQ1DSMsoiR8wiKRKvFIyxomY5hQcfLHX8rBwc45SuaQ1uiG9ZO/3iEYPMg+KBB/96LTzqfzN+aeYTIl4Rq7vmtqs6koE3onawaySKvl1dgR2CXE0giIUn8ANvTc8Em1fAdj2qmwLdVbGHq6GGYO9UtovViCFxFyl4/0jBXjKsJoO84TMGJe85jB4CzneqLD5n2SpJVqE9ibOpNYljr3oUn1dzqNEsrty8gSq7+qf379ULe/V1tmSy44CrLQ6KLJtEjyETfB3HrpfVZcPLV3F05pvNmphXcMWjJFsv00dxXYxGZd69ryrgKORxtoYizhZmlox4GCecxRBG9hLm1QSanCdgZmE2n9+Li6QOy6jfOHcncNgTnwBkptlAtIZ0DYzXOUQxOwPHXDsJX7IXwbQxQwr3vYcNbH8MIDGdjh6YGuPAnWFPdR9DuX15Dd7SCy0oxfwH1OoWRu1WxfiKJwaYCZQMqhp42X06o4GjKw5RtJKOa668ILHBGLHYCV3xAMIghLXLE5FFUDRBBjAzoaih8yh9GDinmlOoKqMGLwGxXFdBmKzXsfWASDZzG2fkjSA/L87BuTIfLmD7isra7nqN1xaHo4DleAq4Z+skHJkjAiFvnhPnfDoRxXRx7V95cSC9NcwEqSqwsu7Dd+uOFPHEm9Y4mNprEFlARSxCGrow4zEs3YzyNceGnzaipJBFcrPAjt2jux6wuOlTHHFyWwPHwGrqEbYhDR4AyNEkhWZSQXpeNICG9rCG7erSrzc9gAsgHaE/pYHLOEJijiiEoqmAevfX4Cbr7fjKjYVSv7Kwb2HVaefLjwIOBziIHqQJakHgggzNLxbYVV1o6jlUkxr7Eg/VGCdKgNKFtIZew9wB4LZZnq5YjsCFYDfmojJCe7qAcrpxir9zJ/9bBPkNz9Li0XfX5XffnlFnsgHlIHUDzpJWXNk1dtXVtkjsfG4mqtnT0VTIf9w47Gzpj5/wpjZGISSFgeOqmKmrVR/g6jQtnVm1qc0YyHxpLgsrg9h1zP8xqfu3HNDelnMja9jM8ErX2Ux6OAaHgRtvq7mgrgGigGB6bqCr01QR482GRJV0eBUQd+O7X22mF+P0q29z5qeucs06d1UnKOYez0mx9c3zivOc0qmgP8yFX3iS5OZ4nAtaVF7KxHnqmRAUrIejqC4O3rwS0qrOPY7+FLXPbWA5y/GtucVYxamYUlHlpkEvzr2cO9Hm/RulA4CT7axde7qgp1OOdq7VbUPlPuKEgWkHHxy4HOPDJ3oi0PmqGkh1PKgfNc8l2lXVl02J76BetW5AtM/fmoF283oBp87VcZhydltPRpWOqlCtUqd+VdHK6VZXU+V19/KB77Y4iaAQPeGi6G/pWUE7ZaTKqrDO+BqPwSd6OWYwRk/ckb2AQ9j1DAHbSF62rhxVP1IXS6Q/9rVGSRmT2kXubhCtH0ekKkuJahIswMHCQP2n5nNtiXo+cammdPvpyscBxwhx9ASvnaMSuJ2sqvWR/VDj6NcELcZ3iIOPzvVS63GtFRP9zX2ZamrqqAksAd0IuvzW8KDXZHg3ydcTa+2d7Watqlq3tWkrBK06cKDPNfW0AjxYTsANlBNwA+UE3EA5ATdQTsANlBNwA+WQH3c8jVg0AndcDb+exfVdSO4hJ+CGy2cM3DGrRT5f4Izjip0a9nEVGOlRy1eSRu/PbSl4R2edH1tB8ItY3AfAmRY5YmSForUHQI4YiUKIWlY6rpADrPPe92e7C5asgDveGIct88uMcR9a3G/cAf51AkQ+A+A+U3fkBNxQOQE3UE7ADZQTcAPlvxi4t26gDqDS3g1cW47mO30sPfe3ABxWVL3syW2+A7j2PuqlM/YJ9CL/36ngTuD2nPnd3/fPub3hSrp65oOAI58eOPg8gDv87dYybj/fAddL7gBu10+PDdz+753AwSexOE0WIRAYghlRy0uhmsAtW9a7pvBrjozikQhXB3F0jOTYhZYrHr7bknSJlIo9gmXLMZbvQ8tz1xQFPIx6ms3bmb/WAqcJKbsQAz3zx3KIWpfR5BpJNIeonbAzU3OMgcjucQEHgFP0dsbE2dwMG0Px9lVNmDVn/vkcGI+ZoqtAlUipGcgjwGqmLUWoC3BClcbAzOBvkWLabBm9vKR++p2zXTHm36QMi7fYyqMB/oF7HA/nRVfGUku60Y1vKVo2U6XhU5DRzDPUuZbcUR+4jzgwi1rRSvGh3FxS1pmifXDpHOtFC0UsZECCXRwCv2dtX78GKl6h1gD/RsyRATBjie1KJnnQifunLA4hxgK8BFzstUL6zLr8nvr1V9b2y0uAmynqt8CKAgqCBLASWPsos4Ju3HAd54AloF2DhacXgEUBiwo0eXqNmM4E4Bvq/FW7W1EJ+EY6UsSsjwOOQZNlDWRny2SV2MtwlgdJMvOqR8lrBA7EK2pmScyNGqpZ8ii1XyzLhq+yUdBFpQYO5mW4RuBmQRQn5bfmq/97MdnOXjz59p9oUzcpqcNyTjPOszBbQTkJV7w+iwva3eJIkcWh0pLYs2wUlXF2gcAlEVocASw4CWe2yJgxS84afraM19bvV7FJO693HSBPmwlAaNpzzTrH12Jhg8jgDGB+lmVlJp5YkM83N98+82GRGtiKGWtSkJ2BczOKukMog1EE7pX3mEK2nf8A8kss/oGdNgAxT8QkBbGC1QVUX4kn4HQHjtIzDoE3wxqaM85iE+zEyiB07UdxWZ6JOgWe4E8mVKjDjwD3PXOieXRDgVMLtBZUc4RIsc7dBMQka0SYZXEsVhSaCmHM+D+z8tnrzc3Dl47z9Q+qq4YBnkvnrgrTGvuIh8CJWZZlV96SQLhtnpPgSzyiSRt8t3R/j/UifAb/+z08/Ir/+5J0B47QtBzZWAEGhmKdC8k1eTpKl3jEn7Yxak2ixEyo/69GvALnpWdMNC20G24HgHPSCcAkNRrwRuriOV+sI/yM3cOXDVCeRTFe+pzNzfVLHzRwFgJnQNeLQwDYY6AFLsbhBa7XAMl2/hysL9EZqTfzAt+UISpSFrcDrutldU9lFYp1Thn2HqtlnWeQuAijlNlW14cnbkidhzdcAWfayz6RDgeA2z6pihlN0eJiMBbGojKzPF+QrDKacwRuxZrlpik29fZZUfz4A6JgxaJap7wrcISG83SCha+CNEyLGy+h2DXTvxT879J3nk5FVqVLHvNqlC4z8uX3zsOv5b+f211NWgE3KYqMZE06sbGPF+s00azzaJqgn7ja2lmaL3gcLJvps9fiRxWwEZX5B8vhfYGTTpDnAUQm5TZldmXjgUXBqahM16QkSBk1q42Mrv1tYX9tc/RYjICkeWeLQy8qLbgwILWIW0y3WwOosXXSIkgp8a9d1F95MhVgV14GD7/3v/0Ovn3udQtLat2RqCgEhbyKuI3epll5jmVIQ3DD9/2NhKjIOcN6TNNibqVUXnMwC979VsjduZU0734/Q9Ec2l3AJ+w5weqlYlHn3HwlmNQ8bjUX6wacBbcBpLpkxTyH3YyBEH8XaYK/nifQxH3ijwEf+1P4WQX7mYPueg44Uran66iZne+Pb0O6qRHxzEP3ezcD6r4sdAg4v/Vo9HBM26DyneuufPk25ZO6BFXL+kLhrCYAjtNJ7e5OPn1DynYQMkI0RV95ar6vyf84nWDRYpJTOab+N5fON5f9Zg60nc5QHfEj97/45OtYAFU9StPlYqMDNHxnF+L60cDdBg/rW6BEz1RU2ZobTtpJjApjxeG3pdjTjg22p0DoS7+eDmFVsDRF0dd1RXvQ8axSzS6UTz++lN/go2u9dhZH23AGSv1djIHfitwB18631HxbhSdIHdP6EcC9HVoOuz5K9q/eIuu3xqLsDpV1iqh588X3Jvlkt0zl7Gb3ThvJQRSHXnukaAw+GmSveNX9ie6Y/6rDaiG7PruvnYaOOrfxAl3ltAI8UE7ADZQTcAPlBNxAOQE3UE7ADZQTcAPl7vW43nlfekjLOj+m/FLAfUgsDOCYeYCpvllzPA1UEwuPVnwrwD9oG9VVYbeErGel+8d+fg+7qfn+ud9h6kXLAf4Upd1xmPpMuJ+qtEOHAY8+tLjjUsIVY/vYCn4l1rl53PAQOH4y9V+Gdf6enK6qneQE3EA5ATdQTsANlBNwA+UE3EA5ATdQTsANlBNwA+UE3ED5WeDeyaJFyNskhDbfV+8Ayl12ffVNlQPsnQSRO66AftpRZvvLIeB8xTS4vcmoZ/PDJ5eHGJmq+F3qZr0A1H5CCGVMJxfTd/nV/ej+VdvlOpe+oxK8qbvDzq0GndhNLznRNtv1ENvfA/f2KhDK5fhSSnxS/+jb9pf7bO1D5CBwZEdS2GchJ7e3viVpCX6kpRn0uYu7q1ebJF7zHCjdG1yr683d9B2BewByd1icRu8bKp3Lsaqao8tnyg6cTmTID+UgcBokPuXC8NrVQaqTMTLaZjBUxIzA8Kimg/etV2txjhQmucR2b6koynbRmgPYtRoBdxropNd963SHxamzvxx/J73vx23cPL5nUTOl3Sh9d8hB4FRz8Kwww7ndoogVChqm8o7Ltg+xUWPMxaAxLpCazmG+sP7sXmLfYTrPI0kNCM4YaUsn06RIU5XEtn/L6BVg3UHYPjifkMvtC+fJxcOlYsReqiyP82VeuU6vLRXeyF3A2YqKzTlAsRR2zBlEAtW7gvJHUaCAw8HNDagXR8HM5NYAiwsQNRFJ97G6v0HdgFiCuoTW55H1SNuHiChbFkGxjPCzvnXa5TrHMhTPGAJOBZ6wBdsXcP/iYQIOu4SIQ5DYwbriA12IQ1fVej2asDCrl6vaSyZZIcJJaeT36qJC4KSbTTLz/GwxfzBphl0c5Hm2TNwQZiLK6sz0zhajpYjDCb+neu15sl5EWdKMyolHevemNp3tPJxk0ITL0FzNRh6esDfeAYdd5/ejLyrzbNmUSW19QuAsleQeEttuwF1DvgZgSw+smJ4B1HO0uBGHaBmMFO+9X9rhtl6mcLzMwerdh1KsI+AjVyVQFvMClMWpDOewMBtDpYMm3fnMbxQoi3sgwPJmQAO7FDT0sNDtY0cDJ+kf/gDwhRhdwNKAT2RxDjoH11u/qgitKluzzlm9WvBkNitjfkbhfA6UnZWzV4uLRPql6O/Lqq7q5zfoiXghZNtn5Wy2NJfYULwpaHAP7at4MJutzDqFvNZjX28FyuKMWZymmnWegMgs4DF/AcnFZg0SFqvVLMPmgpH96YAb+9dbR5Hal2nagLdWPaVYjBRLW+U6b+YAVqiY4jzZjp9xGDLGbZ3NFfjjNte5KsscgUoSX4H1JboKmlIPTao2lOixAcYbBW2uc3ovDfH7JlYh5iR6EYQQusYVHoFtgoetXaxjv5z6b+RO4NArfTKvNOvci8FYFuvCK4tqDdl5Xo3ywkiz4quvL2Lff1lXvRtMjXGo4KZ46alc55uymNdmQhTr/HEV/aPIC57UxdJbTMHLKndYV2VsXc0zUHtBmDjsFGEe/8AykkXps6LI+aoqEpFEMB8VwSca43zpXAtfSuUJcBOEyZiZo+WLaR7QIPeiaZ6nhBepFdhyLAu7tyPUuiP+ptgKGwwp+Q9GwPFKbgdg53I6zX/g1C485uFV0SvEkEEUuyrhaWoxSFPObbRZN3eBGdQWIs2nU8ryKSoRqDQd4CgquQu4t1jnqky2O5u3Wr4lUYMc+9Df1HcOsGKQYo00AZzq4lRBUhFZLzWDnbaxnf170s4daRnL7YxEn7quiGbd6nkihT09d4h8AJzTLdWjrzUOCsl9aws9TTh/hz/s66TxB0JxOyu4O9BXPTnOR0YR72XgspKjqzcs7cBby0rvA0dOwP2E/HcD9xEpLt5dyHy/nI/d6hJ+eiHzo7fS3MtpBXignIAbKCfgBsoJuIHyKyRQPgE3UD5r4E5d9efkTuCCQXflOgrdpQg6mgK18n5c4DTr/E66PjuuHFkBZdyjR9WAEt1BnrZt27SPKGZ6zNK1HF+DEb3fZ+htroGjydFZ57/AGCfuTNn92744nDJPD1ZwAm6gghNwAxWcgBuo4ATcQAUn4AYqOAE3UMEJuIEKTsANVHACbqCCXxc4x6HkLXaaToVFwJHOwPupe9EUCF2ipra3G1+DvlfbJqj7iLJ3Ct4Gjji7O7dtbMAn0QA/kXlasREk2VM6NI1prDd4H+OTM96d1JBT0Pw4VaL0CWGqFVS6QEJQAdU7sQNl7YLgwFW7lgN8+994PFbxACo+wHdUqjs2gKz4gRyyOJ0Iz/eeX/DcbPnHCjhgjG+3QmzHt0z0/mQfTfNSbGa5NZhgVDqqQagimAHlQnDOmaVL1nvc95eWdNNmVETw8bx1YYxt5AZPXqAOuufVD+Qq/VSSeJB+VOZeXJg64SNa/FguwB29LNfL+XgX9NDm3etbLw0c9iHvBfw50sAp5OQ4N6AZJeVyyaXORa4MfECddrnOYZfX3ld9hIAvg9J5Yi4XZbisVWLKHkkW75CDN2tcF/xqcWHELmNeBMDMLbj3TNcZX/0OjZGrjPeRZfYPc2j5cQwiz1KscwaWt3UCHphy/PRrzwKVjFyC54LkLHLfpZd1VaBpXpHa0S4yVQr6CxDm1rFi8gVWt56ClMzkQF3miaHI3U2eJnQyWaz9q2xel42ZNKPi4nHzZJM++uq5M77/OwJp2MQuP6vrmRgQv2EKCfWoHiFws8ANm6uNd1YvrrbhXxohrxNgcvl0MnGexk1YQf+oIZ15GpplHdJ61KyvV+XCi2+emCzTwD3NwefZzbpg5bLOTKCDrhZ3W5wiHMN6s9EcYCMkECxt4Bn9EeuEFgfBXyMwljy2oKmGEAsD6WXK1B5DJhIXvJEXUoi353/EAQGBk9OJ71xdPy1AzKz+JtGm7F65wLwSSGBmAQtd5zoRX9AWOMd/ucHq8JhDOiEDbBoO3eWCqgJavd7UaueAoImTi8ePw2Rt/XiJwN3/HeV/tSgPIwQur4eEJG0d/B5zFHlalOH9+0/NJYH72+aPlI0ROHj92veb/CYnTG0g0FdaizOTLFesc2Iq1rkYb2Mekz1wTyJfJl7IwQs/JXCW5n2PdK7zRAGTL0bqOOue2jMEgbP+xMFc44lAMx/CAbYcG+FxPBUgolnnnsrmv22eA/OvQ5BFDbC8frpRFtf/VuVuPweAMyNT955GwDLuuLFQwFG4QeCurh2rjNDipstP2lUZC+umVGx5L4Y0LsLcXc3PQyibihAcFqB4Ucyut6vz8xkbEiASEFhP5omncp3bq6qZuCFAxu2y4WDH4G/LBofYm6TICuiWUf9dBcJjVjxvYgiXVWwjetOsmhnWDEr0jJ8Wvn/97PX9Ocua+Syin7SrErBtwgKPWB5enqYRZcxQAWmGS6kpKIOLVOWrN4cEpiiLwxJMQwhXXcGD1KZ4kVasc88QEJh40QbDJlhD26UdtyJ4V4Gi67PUBgZeammnjuP5MpOaAXNcjh7jdhOBFdqp2EeQ9pUDFtfuPqO3YIE2uzTZhWro/WzUJ8rN00F/fVXqjTDaHXh09mkGu62E9C/+xxydyNp/OlVM8f7TB+2OsDardTv3QR1Enbb27WQbuihpUHIA8imBU/dV252Q2lTd+z+3edQIuURPfzu1KO2f3FBP8mnroQLchhPvtCgN6P4SRv2HrmLYDwQO9lnGdY77lp7fRhHLnTCWCyBDyRhDV0cu0eLUpHzglOuOt98qSU/L0eP3qTMcuINyuw30R+WzHAqcmoL5b+Ld+8gB4N4q6hY45xjAvQmb7lnuOzIUOE20H2bmP78ep4MBFHD68E8N3O1hH7XF+EcsZA5dlOuwkNku1w1XcFoBHqjgBNxABSfgBir4LIEj+61Xjqfh82SdEzgBN0g+a+COWS34bJLEvysqhzu3rMA6ngSmsIIjKggsbh6vdKUAzz56f7s9BC7yTM/8TcsvcfriXeBI572A/+vlfddDQ0ePtx/CsXda2O0MfmwttzPd4yv6POUE3ED5f1xq2RambAeBAAAAAElFTkSuQmCC';
        image.onload = ()=>{
            console.log(image.width);
            console.log(image.height);
        };
        return (
            <div>
                <Header/>
                <Router>
                    <div>
                        <Route component={A} path="/A"/>
                        <Route component={B} path="/B"/>
                    </div>
                </Router>
                <Footer/>
            </div>

        )
    }
}

export default RouterView;