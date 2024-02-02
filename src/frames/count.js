import mainLayout from '../layouts/main';
import { getFramer, setFramer } from '../data/framer';
//import { getCount, incrementCount } from '../data/count';

const build = async (frameData) => {
    const { payload } = frameData;
    //const count = await getCount();
    const lastFramerUsername = await getFramer() || '';

    if (payload) {
       // await incrementCount(count);
        await setFramer(payload.untrustedData.fid);
    }

    const html = String.raw;
   // const encodedUrl = encodeURIComponent('https://web3.bio/0xhashbrown.eth' + (lastFramerUsername ? '/' + lastFramerUsername : ''));
    //const url = `https://api.crawlbase.com/screenshots?token=4HrVHd6RoiajGYYEJsx0QA&url=${encodedUrl}`;

    const frameHTML = html`
        <fc-frame>
            <div class="space-y-6">
                <div class="flex items-center space-x-4">
                    <img src="https://unsplash.com/photos/1_CMoFsPfso/download?force=true&w=640" alt="Logo" class="h-16 w-16 rounded-full">
                    <div>
                        <h1 class="text-2xl font-bold">@web3onfire</h1>
                        <p class="text-sm">Web3 Podcast • Newsletter • Youtube, hosted by @0xHashbrown & @Ambirewallet</p>
                    </div>
                </div>
                <div class="space-y-4">
                    <a href="#" class="block link px-6 py-3 rounded-lg text-lg font-semibold">Ambire Wallet</a>
                    <a href="#" class="block link px-6 py-3 rounded-lg text-lg font-semibold">Tape.xyz</a>
                    <a href="#" class="block link px-6 py-3 rounded-lg text-lg font-semibold">Hey.xyz</a>
                    <a href="#" class="block link px-6 py-3 rounded-lg text-lg font-semibold">Guild.xyz</a>
                    <a href="#" class="block link px-6 py-3 rounded-lg text-lg font-semibold">Podbean</a>
                </div>
                <img src="" alt="Dynamic Image">
            </div>
        </fc-frame>
    `;

    return mainLayout(frameData, frameHTML);
};
export default {
    
    //image: `https://api.crawlbase.com/screenshots?token=4HrVHd6RoiajGYYEJsx0QA&height=700&url=https://web3.bio/${username}`,
    buttons: [
        { 
            label: '⬅️ Back',
            goTo: 'count',
        }
    ]
};
export default {
    build,
    buttons
};
