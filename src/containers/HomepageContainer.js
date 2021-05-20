import { connect } from 'react-redux';
import Homepage from 'src/components/Homepage/Homepage';
import { fetchMyChannels, fetchMyRecos } from 'src/actions/userActions';
import { setIsRefresh } from 'src/actions/appActions';
// import fakeChannels from 'src/middlewares/fakeChannels';

const mapStateToProps = ({ user, app }) => ({
  isUserLoggued: app.isUserLoggued,
  myChannels: user.channels,
  recommendedChannels: user.recommendedChannels,
  isRefresh: app.isRefresh,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyChannels: () => dispatch(fetchMyChannels()),
  fetchMyRecos: () => dispatch(fetchMyRecos()),
  setIsRefresh: (bool) => dispatch(setIsRefresh(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
