
interface DisplayProps {
    publicRepos: number,
    followers: number,
    following: number
}


const Display = ({publicRepos, followers, following}: DisplayProps) => {
    const displayData = [
        {
            title: "Public",
            data: publicRepos
        },
        {
            title: "Followers",
            data: followers
        },
        {
            title: "Following",
            data: following
        }
    ]
  return (
    <div className="flex justify-around gap-5 p-5 bg-primary-200">
        {displayData.map((item, index) => (
            <div key={index} className="flex flex-col gap-1 text-center">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <h2 className="text-lg">{item.data}</h2>
            </div>
        ))}
    </div>
  )
}

export default Display