import './Host.css';

export default function Host({ host }) {
    /* split spaces in the name */
    const hostSplitName = host.name.split(' ');
    /* In the returned array "hostSplitName", 
    there're two strings : name and lastname */
    const [name, lastname] = hostSplitName;

    return (
    <div className="host">
       <div className="host-name">
        <p>{name}</p>
        <p>{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="host-picture" />
    </div>
    );
}



